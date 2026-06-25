import { fetchApiGames } from './rawgApi'
import type { GameCard } from '../type/game'

export const fetchFeaturedGames = async (): Promise<GameCard[]> => {
    const data = await fetchApiGames({
        dates: '2025-01-01,2025-12-31',
        page_size: 5,
    })

    return data.results.map((game) => ({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        rating: game.rating,
    }))
}

export const fetchPopularGames = async (): Promise<GameCard[]> => {
    const data = await fetchApiGames({
        dates: '2026-01-01,2026-12-31',
        page_size: 5,
    })

    return data.results.map((game) => ({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        rating: game.rating,
    }))
}
