import { fetchApiGames } from './rawgApi'
import type { GameCard } from '../type/game'
import type { FetchGamesParams } from './rawgApi'

export const fetchGameCards = async (
    params: FetchGamesParams
): Promise<GameCard[]> => {
    const data = await fetchApiGames(params)

    return data.results.map((game) => ({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        rating: game.rating,
    }))
}
