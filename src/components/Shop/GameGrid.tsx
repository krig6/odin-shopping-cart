import { fetchGames } from '../../services/gameService'
import type { Game } from '../../type/game'
import { useState, useEffect } from 'react'

type GameGridProps = {
    selectedGenres: number[]
}

export const GameGrid = ({ selectedGenres }: GameGridProps) => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetchGames({
            genres: selectedGenres.join(','),
        }).then(setGames)
    }, [selectedGenres])

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
