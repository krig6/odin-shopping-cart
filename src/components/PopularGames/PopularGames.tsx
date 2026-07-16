import { useEffect, useState } from 'react'
import type { GameCard } from '../../type/game'
import { fetchGames } from '../../services/gameService'
import { PopularGameCard } from './PopularGameCard'

export const PopularGames = () => {
    const [games, setGames] = useState<GameCard[]>([])

    useEffect(() => {
        fetchGames({
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
