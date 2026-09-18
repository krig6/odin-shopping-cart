import { fetchApiGames } from './rawgApi'
import type { Game } from '../type/game'
import type { FetchGamesParams } from './rawgApi'
import { USE_MOCK_DATA } from '../config'
import { fetchMockGames } from './mockGameService'

export type GamesResult = {
    games: Game[]
    count: number
}

export const fetchGames = async (
    params?: FetchGamesParams
): Promise<GamesResult> => {
    if (USE_MOCK_DATA) {
        return fetchMockGames()
    }

    const data = await fetchApiGames(params)

    return {
        games: data.results.map((game) => ({
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            rating: game.rating,
        })),
        count: data.count,
    }
}
