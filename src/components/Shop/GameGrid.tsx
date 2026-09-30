import type { Game } from '../../type/game'
import { GameCard } from '../GameShowcase/GameCard'

type GameGridProps = {
    games: Game[]
}

export const GameGrid = ({ games }: GameGridProps) => {
    return (
        <div className="grid w-full cursor-pointer grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {games.map((game) => (
                <div key={game.id}>
                    <GameCard game={game} />
                </div>
            ))}
        </div>
    )
}
