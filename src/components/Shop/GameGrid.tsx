import { fetchGames } from '../../services/gameService'
import type { Game } from '../../type/game'
import { useState, useEffect } from 'react'

type GameGridProps = {
    selectedGenres: string[]
    selectedRating: number | undefined
}

export const GameGrid = ({ selectedGenres, selectedRating }: GameGridProps) => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetchGames({
            genres: selectedGenres.join(','),
        }).then(setGames)
    }, [selectedGenres])

    const filteredGames = games.filter(
        (game) => selectedRating === undefined || game.rating >= selectedRating
    )

    return (
        <div>
            {filteredGames.map((game) => (
                <div key={game.id}>
                    <p>{game.name}</p>
                </div>
            ))}
        </div>
    )
}
