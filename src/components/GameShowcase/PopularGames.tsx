import { useEffect, useState } from 'react'
import { fetchGames } from '../../services/gameService'
import type { Game } from '../../type/game'
import { GameCard, gameCardWrapperClass } from './GameCard'

export const PopularGames = () => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetchGames({
            ordering: '-added',
            page_size: 6,
        }).then(({ games }) => {
            setGames(games)
        })
    }, [])

    return (
        <section className="text-[#F2E4D1] md:mx-1">
            <h2 className="py-5 text-xl font-bold">Popular Games</h2>
            <div className="flex snap-x snap-mandatory gap-4 overflow-visible overflow-x-auto pb-4 xl:grid xl:w-full xl:grid-cols-6">
                {games.map((game) => (
                    <div key={game.id} className={gameCardWrapperClass}>
                        <GameCard game={game} />
                    </div>
                ))}
            </div>
        </section>
    )
}
