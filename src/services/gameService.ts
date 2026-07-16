import { fetchApiGames } from './rawgApi'
import type { Game } from '../type/game'
import type { FetchGamesParams } from './rawgApi'

export const fetchGames = async (
    params?: FetchGamesParams
): Promise<Game[]> => {
    const data = await fetchApiGames(params)

    return data.results.map((game) => ({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        rating: game.rating,
    }))
}
