import { useCallback, useEffect, useState } from 'react'
import { fetchGames } from '../services/gameService'
import type { FetchGamesParams } from '../services/rawgApi'
import type { Game } from '../type/game'

export type UseGamesResult = {
    games: Game[]
    count: number
    isPending: boolean
    isFetching: boolean
    error: Error | null
    refetch: () => void
}

type RequestState = {
    key: string
    retryCount: number
    games: Game[]
    count: number
    error: Error | null
    status: 'pending' | 'success' | 'error'
}

const isAbortError = (error: unknown) =>
    error instanceof DOMException && error.name === 'AbortError'

export const useGames = (params: FetchGamesParams): UseGamesResult => {
    const paramsKey = JSON.stringify(params)
    const [retryCount, setRetryCount] = useState<number>(0)
    const [request, setRequest] = useState<RequestState>({
        key: paramsKey,
        retryCount: 0,
        games: [],
        count: 0,
        error: null,
        status: 'pending',
    })

    useEffect(() => {
        const controller = new AbortController()
        const params = JSON.parse(paramsKey) as FetchGamesParams

        fetchGames(params, { signal: controller.signal })
            .then(({ games, count }) => {
                setRequest({
                    key: paramsKey,
                    retryCount,
                    games,
                    count,
                    error: null,
                    status: 'success',
                })
            })
            .catch((err: unknown) => {
                if (isAbortError(err)) return

                setRequest({
                    key: paramsKey,
                    retryCount,
                    games: [],
                    count: 0,
                    error:
                        err instanceof Error
                            ? err
                            : new Error('Something went wrong.'),
                    status: 'error',
                })
            })

        return () => controller.abort()
    }, [paramsKey, retryCount])

    const refetch = useCallback(() => {
        setRetryCount((prev) => prev + 1)
    }, [])

    const isCurrentRequest =
        request.key === paramsKey && request.retryCount === retryCount
    const isFetching = !isCurrentRequest || request.status === 'pending'

    return {
        games: request.games,
        count: request.count,
        isPending: request.games.length === 0 && isFetching,
        isFetching,
        error: isCurrentRequest ? request.error : null,
        refetch,
    }
}
