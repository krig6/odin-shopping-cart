import { useCallback, useEffect, useState } from 'react'
import { fetchGame } from '../services/gameService'
import type { Game } from '../type/game'

export type UseGameResult = {
    game: Game | null
    isPending: boolean
    error: Error | null
    refetch: () => void
}

type GameResult = {
    key: string
    game: Game | null
    error: Error | null
}

export const useGame = (id: number | null): UseGameResult => {
    const [attempt, setAttempt] = useState<number>(0)
    const [result, setResult] = useState<GameResult | null>(null)

    const key = id === null ? '' : `${id}:${attempt}`

    useEffect(() => {
        if (id === null) return

        const controller = new AbortController()

        fetchGame(id, { signal: controller.signal })
            .then((game) => {
                setResult({ key, game, error: null })
            })
            .catch((err: unknown) => {
                if (err instanceof DOMException && err.name === 'AbortError') {
                    return
                }

                setResult({
                    key,
                    game: null,
                    error:
                        err instanceof Error
                            ? err
                            : new Error('Something went wrong.'),
                })
            })

        return () => controller.abort()
    }, [id, key])

    const refetch = useCallback(() => {
        setAttempt((prev) => prev + 1)
    }, [])

    const isCurrent = result?.key === key

    return {
        game: isCurrent ? result.game : null,
        isPending: key !== '' && !isCurrent,
        error: isCurrent ? result.error : null,
        refetch,
    }
}
