import { useCart } from '../../context/useCart'
import { useWishlist } from '../../context/useWishlist'
import { Cart, Heart } from '@boxicons/react'
import type { Game } from '../../type/game'

type GameCardProps = {
    game: Game
}

export const gameCardWrapperClass =
    'w-[42vw] max-w-48 min-w-44 shrink-0 snap-start xl:w-full xl:max-w-none xl:min-w-0 xl:basis-[calc((100%_-_5rem)/6)]'

export const GameCard = ({ game }: GameCardProps) => {
    const {
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        items: cartItems,
    } = useCart()

    const {
        addItem: addItemToWishlist,
        removeItem: removeItemFromWishlist,
        items: wishlistItems,
    } = useWishlist()

    const isInWishlist = wishlistItems.some((item) => item.game.id === game.id)
    const isInCart = cartItems.some((item) => item.game.id === game.id)

    const handleWishlistClick = () => {
        if (isInWishlist) {
            removeItemFromWishlist(game.id)
            return
        }

        addItemToWishlist(game)
    }

    const handleCartClick = () => {
        if (isInCart) {
            removeItemFromCart(game.id)
            return
        }

        addItemToCart(game)
    }

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

                    <div className="flex shrink-0 items-center gap-1.5">
                        <button
                            type="button"
                            className={`flex shrink-0 cursor-pointer items-center justify-center rounded-md p-2 text-[#7f7f7f] transition ${isInWishlist ? 'hover:bg-[#F5D77A]' : ''} hover:text-[#e5c158] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95 ${isInWishlist ? 'bg-[#E5C158]' : 'bg-gray-700'}`}
                            aria-label={
                                isInWishlist
                                    ? `Remove ${game.name} from wishlist`
                                    : `Add ${game.name} to wishlist`
                            }
                            onClick={handleWishlistClick}
                        >
                            <Heart
                                size="sm"
                                fill={isInWishlist ? '#000000' : 'currentColor'}
                            />
                        </button>

                        <button
                            type="button"
                            className={`flex shrink-0 cursor-pointer items-center justify-center rounded-md p-2 text-[#7f7f7f] transition ${isInCart ? 'hover:bg-[#F5D77A]' : ''} hover:text-[#E5C158] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95 ${isInCart ? 'bg-[#E5C158]' : 'bg-gray-700'}`}
                            aria-label={
                                isInCart
                                    ? `Remove ${game.name} from cart`
                                    : `Add ${game.name} to cart`
                            }
                            onClick={handleCartClick}
                        >
                            <Cart
                                size="sm"
                                fill={isInCart ? '#000000' : 'currentColor'}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}
