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

export const fetchApiGames = async (): Promise<ApiResponse> => {
    const response = await fetch(`${RAWG_API_URL}/games?key=${RAWG_API_KEY}`)

    if (!response.ok) {
        throw new Error('Failed to fetch games.')
    }

    return response.json()
}
