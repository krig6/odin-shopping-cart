import type { Game } from '../../type/game'
import { GameCard } from '../GameShowcase/GameCard'

type GameGridProps = {
    games: Game[]
}

export const GameGrid = ({ games }: GameGridProps) => {
    return (
        <div className="grid w-full cursor-pointer grid-cols-6 gap-8">
            {games.map((game) => (
                <div key={game.id}>
                    <GameCard game={game} />
                </div>
            ))}
        </div>
    )
}
