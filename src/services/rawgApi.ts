import { RAWG_API_URL, RAWG_API_KEY } from '../config'

export type ApiGame = {
    id: number
    name: string
    background_image: string
    rating: number
    added: number
    released: string
}

type ApiResponse = {
    results: ApiGame[]
}

export type FetchGamesParams = {
    dates?: string
    ordering?: string
    page_size?: number
}

export const fetchApiGames = async (
    params?: FetchGamesParams
): Promise<ApiResponse> => {
    const url = new URL(`${RAWG_API_URL}/games`)

    url.searchParams.set('key', RAWG_API_KEY)

    if (params?.ordering) {
        url.searchParams.set('ordering', params.ordering)
    }

    if (params?.page_size) {
        url.searchParams.set('page_size', String(params.page_size))
    }

    if (params?.dates) {
        url.searchParams.set('dates', params.dates)
    }

    const response = await fetch(url.toString())

    if (!response.ok) {
        throw new Error('Failed to fetch games.')
    }

    return response.json()
}
