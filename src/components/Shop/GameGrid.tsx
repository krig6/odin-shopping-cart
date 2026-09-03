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
        <div className="grid w-full cursor-pointer grid-cols-6 gap-8">
            {filteredGames.map((game) => (
                <article
                    key={game.id}
                    className="relative rounded-lg border border-gray-700"
                >
                    <img
                        className="aspect-2/3 w-full rounded-t-lg object-cover"
                        src={game.background_image}
                        alt={game.name}
                    />
                    <h4 className="absolute bottom-2 left-1/2 z-10 w-full max-w-32 -translate-x-1/2 truncate text-center text-sm font-semibold text-white">
                        {game.name}
                    </h4>
                </article>
            ))}
        </div>
    )
}
