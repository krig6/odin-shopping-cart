import { useCart } from '../../context/useCart'
import { Cart } from '@boxicons/react'
import type { Game } from '../../type/game'

type GameCardProps = {
    game: Game
}

export const gameCardWrapperClass =
    'w-[42vw] max-w-48 min-w-44 shrink-0 snap-start xl:w-full xl:max-w-none xl:min-w-0 xl:basis-[calc((100%_-_5rem)/6)]'

export const GameCard = ({ game }: GameCardProps) => {
    const { addItem } = useCart()
    return (
        <article className="rounded-lg border border-gray-600 text-[#F2E4D1]">
            <img
                className="h-30 w-auto rounded-t-lg object-cover md:h-40 xl:aspect-2/3 xl:h-full xl:object-cover"
                src={game.background_image}
                alt={game.name}
            />

            <div className="p-2.5">
                <h3 className="truncate text-base font-bold">{game.name}</h3>

                <div className="mt-1.5 flex items-center justify-between">
                    <div className="mr-auto flex flex-col gap-1">
                        <p className="text-sm">$49.99</p>

                        <p className="text-xs text-[#E5C158]">
                            ⭐ {game.rating}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="flex shrink-0 cursor-pointer items-center justify-center rounded-md bg-gray-700 p-2 text-gray-50 focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none"
                        aria-label={`Add ${game.name} to cart`}
                        onClick={() => addItem(game)}
                    >
                        <Cart size="sm" fill="#7f7f7f" />
                    </button>
                </div>
            </div>
        </article>
    )
}
