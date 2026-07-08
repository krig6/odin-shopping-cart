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
                {games.map((game) => (
                    <div className="popular-games__card" key={game.id}>
                        <img src={game.background_image} alt={game.name} />
                        <div className="popular-games__details">
                            <h2>{game.name}</h2>
                            <p>$49.99</p>
                            <span>⭐ {game.rating}</span>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
