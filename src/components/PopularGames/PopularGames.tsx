import { useEffect, useState } from 'react'
import { fetchGameCards } from '../../services/gameService'
import type { GameCard } from '../../type/game'
import { PopularGameCard } from './PopularGameCard'

export const PopularGames = () => {
    const [games, setGames] = useState<GameCard[]>([])

    useEffect(() => {
        fetchGameCards({
            dates: '2025-01-01,2025-12-31',
            page_size: 5,
        }).then(setGames)
    }, [])

    return (
        <section className="popular-games">
            <h2>Popular Games</h2>
            <div className="popular-games__grid">
                {games.map((game) => (
                    <PopularGameCard game={game} key={game.id} />
                ))}
            </div>
        </section>
    )
}
