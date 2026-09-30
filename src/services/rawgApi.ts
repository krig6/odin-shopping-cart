import { RAWG_API_URL, RAWG_API_KEY } from '../config'

export type ApiGame = {
    id: number
    name: string
    background_image: string
    rating: number
    added: number
    released: string
}

type GamesResponse = {
    results: ApiGame[]
    count: number
}

export type ApiGameDetail = ApiGame & {
    description: string | null
    metacritic: number | null
    tba: boolean
    playtime: number
    ratings_count: number
    esrb_rating: { name: string } | null
    genres?: { name: string }[]
    developers?: { name: string }[]
    publishers?: { name: string }[]
    parent_platforms?: { platform: { name: string } }[]
    stores?: { store: { name: string } }[]
}

export const fetchApiGame = async (
    id: number,
    signal?: AbortSignal
): Promise<ApiGameDetail> => {
    const url = new URL(`${RAWG_API_URL}/games/${id}`)

    url.searchParams.set('key', RAWG_API_KEY)

    const response = await fetch(url.toString(), { signal })

    if (!response.ok) {
        throw new Error('Failed to fetch game.')
    }

    return response.json()
}

export type FetchGamesParams = {
    dates?: string
    ordering?: string
    page_size?: number
    genres?: string
    page?: number
    search?: string
}

export const fetchApiGames = async (
    params?: FetchGamesParams,
    signal?: AbortSignal
): Promise<GamesResponse> => {
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

    if (params?.genres) {
        url.searchParams.set('genres', String(params.genres))
    }

    if (params?.page) {
        url.searchParams.set('page', String(params.page))
    }

    if (params?.search) {
        url.searchParams.set('search', params.search)
    }

    const response = await fetch(url.toString(), { signal })

    if (!response.ok) {
        throw new Error('Failed to fetch games.')
    }

    return response.json()
}

export type ApiGenre = {
    id: number
    name: string
    image_background: string
}

type GenresResponse = {
    results: ApiGenre[]
}

export type FetchGenresParams = {
    ordering?: string
    page_size?: number
}

export const fetchApiGenres = async (
    params?: FetchGenresParams
): Promise<GenresResponse> => {
    const url = new URL(`${RAWG_API_URL}/genres`)

    url.searchParams.set('key', RAWG_API_KEY)

    if (params?.ordering) {
        url.searchParams.set('ordering', params.ordering)
    }

    if (params?.page_size) {
        url.searchParams.set('page_size', String(params.page_size))
    }

    const response = await fetch(url.toString())

    if (!response.ok) {
        throw new Error('Failed to fetch genres.')
    }

    return response.json()
}
