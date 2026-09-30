import { useCart } from '../../context/useCart'
import { useWishlist } from '../../context/useWishlist'
import type { CartItem } from '../../type/cart'
import { Link } from 'react-router'
import { Plus, Minus, Heart, TrashAlt } from '@boxicons/react'

type CartProductProps = {
    item: CartItem
}

export const CartProduct = ({ item }: CartProductProps) => {
    const { updateQuantity, removeItem: removeItemFromCart } = useCart()
    const {
        addItem: addItemToWishlist,
        removeItem: removeItemFromWishlist,
        items: wishlistItems,
    } = useWishlist()

    const isInWishlist = wishlistItems.some(
        (wishlistItem) => wishlistItem.game.id === item.game.id
    )

    const handleWishlistClick = () => {
        if (isInWishlist) {
            removeItemFromWishlist(item.game.id)
            return
        }

        addItemToWishlist(item.game)
    }

    return (
        <div className="relative flex rounded-[18px] border border-gray-600 bg-gray-800 p-2.5 lg:rounded-[28px] lg:p-5">
            <Link
                to={`/game/${item.game.id}`}
                aria-label={`View ${item.game.name}`}
                className="shrink-0 cursor-pointer after:absolute after:inset-0 after:content-['']"
            >
                <img
                    src={item.game.background_image}
                    alt=""
                    className="h-30 w-25 rounded-lg object-cover lg:h-48 lg:w-40"
                />
            </Link>

            <div className="ml-3 flex flex-1 flex-col justify-between text-sm lg:grid lg:grid-cols-3 lg:flex-row lg:items-center lg:gap-20">
                <span className="lg:text-xl lg:font-bold">
                    {item.game.name}
                </span>

                <div className="flex items-center gap-2">
                    <span className="text-[#E5C158] lg:text-base lg:font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>

                <div className="relative z-10 flex w-fit items-center gap-2 rounded-md border border-gray-600 bg-gray-900 px-1 py-0.5 text-sm text-[#F2E4D1]">
                    <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.game.name}`}
                        className="cursor-pointer rounded p-1 transition-colors hover:bg-gray-700 hover:text-[#E5C158] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95 lg:p-2"
                        onClick={() =>
                            updateQuantity(item.game.id, item.quantity - 1)
                        }
                    >
                        <Minus
                            height={14}
                            width={14}
                            className="lg:h-5 lg:w-5"
                        />
                    </button>

                    <span className="text-[#F2E4D1] lg:text-base">
                        {item.quantity}
                    </span>

                    <button
                        type="button"
                        aria-label={`Increase quantity of ${item.game.name}`}
                        className="cursor-pointer rounded p-1 transition-colors hover:bg-gray-700 hover:text-[#E5C158] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95 lg:p-2"
                        onClick={() => {
                            updateQuantity(item.game.id, item.quantity + 1)
                        }}
                    >
                        <Plus
                            height={14}
                            width={14}
                            className="lg:h-5 lg:w-5"
                        />
                    </button>
                </div>
            </div>

            <div className="relative z-10 mt-auto mr-2 ml-auto flex items-center gap-2 lg:m-auto lg:ml-10">
                <button
                    type="button"
                    className={`flex shrink-0 cursor-pointer items-center justify-center rounded-md p-2 text-[#7f7f7f] transition ${isInWishlist ? 'hover:bg-[#F5D77A]' : ''} hover:text-[#E5C158] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95 ${isInWishlist ? 'bg-[#E5C158]' : ''}`}
                    aria-label={
                        isInWishlist
                            ? `Remove ${item.game.name} from wishlist`
                            : `Add ${item.game.name} to wishlist`
                    }
                    onClick={handleWishlistClick}
                >
                    <Heart
                        size="sm"
                        fill={isInWishlist ? '#000000' : 'currentColor'}
                    />
                </button>

                <button
                    className="cursor-pointer rounded p-1 text-[#F2E4D1] transition-colors hover:bg-red-500/15 hover:text-red-400 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none active:scale-95 lg:p-2"
                    type="button"
                    aria-label={`Remove ${item.game.name} from cart`}
                    onClick={() => removeItemFromCart(item.game.id)}
                >
                    <TrashAlt
                        height={14}
                        width={14}
                        className="lg:h-5 lg:w-5"
                    />
                </button>
            </div>
        </div>
    )
}
