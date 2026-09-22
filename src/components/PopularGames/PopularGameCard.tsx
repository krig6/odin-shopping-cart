import { Cart } from '@boxicons/react'
import type { Game } from '../../type/game'

type PopularGameCardProps = {
    game: Game
}

export const PopularGameCard = ({ game }: PopularGameCardProps) => (
    <article className="rounded-lg border border-gray-700">
        <img
            className="aspect-2/3 w-full rounded-t-lg object-cover"
            src={game.background_image}
            alt={game.name}
        />

        <div className="p-2.5">
            <h3 className="truncate text-sm font-semibold text-white">
                {game.name}
            </h3>

            <div className="mt-1.5 flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold text-white">$49.99</p>

                    <p className="text-xs text-slate-400">⭐ {game.rating}</p>
                </div>

                <button
                    type="button"
                    className="rounded-md bg-blue-600 p-1.5 text-white"
                    aria-label={`Add ${game.name} to cart`}
                >
                    <Cart size="xs" />
                </button>
            </div>
        </div>
    </article>
)
