import { fetchGames } from '../../services/gameService'
import type { Game } from '../../type/game'
import { useState, useEffect } from 'react'

export const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetchGames({
            genres: '',
        }).then(setGames)
    }, [])

    return (
        <div>
            {games.map((game) => (
                <div key={game.id}>
                    <p>{game.name}</p>
                </div>
            ))}
        </div>
    )
}
