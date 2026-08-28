import { useEffect, useState } from 'react'
import { fetchGames } from '../../services/gameService'
import type { Game } from '../../type/game'
import { PopularGameCard } from './PopularGameCard'

export const PopularGames = () => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetchGames({
            dates: '2025-01-01,2025-12-31',
            page_size: 5,
        }).then(setGames)
    }, [])

    return (
        <section>
            <h2 className="py-5 text-xl font-bold text-white">Popular Games</h2>
            <div className="grid w-full grid-cols-5 gap-8">
                {games.map((game) => (
                    <PopularGameCard game={game} key={game.id} />
                ))}
            </div>
        </section>
    )
}
