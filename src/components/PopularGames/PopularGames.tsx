import { useEffect, useState } from 'react'
import { fetchGameCards } from '../../services/gameService'
import type { GameCard } from '../../type/game'

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
                <div className="game-card">Card 1</div>
                <div className="game-card">Card 2</div>
                <div className="game-card">Card 3</div>
                <div className="game-card">Card 4</div>
                <div className="game-card">Card 5</div>
            </div>
        </section>
    )
}
