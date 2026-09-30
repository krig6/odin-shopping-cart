import { Link, useParams } from 'react-router'
import { Cart, ChevronLeft, Heart } from '@boxicons/react'
import { useGame } from '../../hooks/useGame'
import { useCart } from '../../context/useCart'
import { useWishlist } from '../../context/useWishlist'
import { ErrorState, GameDetailSkeleton } from '../Loading/Skeletons'
import { GAME_PRICE } from '../../config'

const controlClass =
    'flex cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-bold transition focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95 lg:text-lg'

const chipClass =
    'rounded-full border border-gray-600 bg-gray-800 px-3 py-1 text-xs text-[#F2E4D1]'

const releaseLabel = (released?: string, isTba?: boolean) => {
    if (isTba || !released) return 'TBA'
    return released.slice(0, 4)
}

const Chips = ({ items }: { items?: string[] }) =>
    items && items.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5">
            {items.map((item) => (
                <li key={item} className={chipClass}>
                    {item}
                </li>
            ))}
        </ul>
    ) : null

export const GameNotFound = () => (
    <div className="flex min-h-60 flex-col items-center justify-center gap-4 px-4 text-center text-[#F2E4D1]">
        <h1 className="text-2xl font-bold lg:text-3xl">Page not found</h1>

        <Link
            to="/shop"
            className={`${controlClass} bg-[#E5C158] text-gray-700 hover:bg-[#F5D77A] hover:text-[#0d1b2e]`}
        >
            Back to Shop
        </Link>
    </div>
)

export const GameDetail = () => {
    const { id } = useParams()
    const parsedId = Number(id)
    const isValidId = Number.isInteger(parsedId) && parsedId > 0
    const { game, isPending, error, refetch } = useGame(
        isValidId ? parsedId : null
    )

    const {
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        items,
    } = useCart()
    const {
        addItem: addItemToWishlist,
        removeItem: removeItemFromWishlist,
        items: wishlistItems,
    } = useWishlist()

    if (!isValidId) return <GameNotFound />

    if (isPending) return <GameDetailSkeleton />

    if (error || !game) {
        return (
            <ErrorState
                message="We couldn't load this game."
                onRetry={refetch}
            />
        )
    }

    const isInCart = items.some((item) => item.game.id === game.id)
    const isInWishlist = wishlistItems.some((item) => item.game.id === game.id)

    const handleCartClick = () => {
        if (isInCart) {
            removeItemFromCart(game.id)
            return
        }

        addItemToCart(game)
    }

    const handleWishlistClick = () => {
        if (isInWishlist) {
            removeItemFromWishlist(game.id)
            return
        }

        addItemToWishlist(game)
    }

    return (
        <div className="mx-auto w-full max-w-6xl px-4 pt-6 pb-12 text-[#F2E4D1] md:px-8 md:pt-8">
            <Link
                to="/shop"
                className="inline-flex w-fit items-center text-sm transition-colors hover:text-[#E5C158]"
            >
                <ChevronLeft size="sm" />
                <span>Continue Shopping</span>
            </Link>

            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-10">
                <img
                    src={game.background_image}
                    alt={game.name}
                    className="aspect-4/3 w-full shrink-0 rounded-lg object-cover md:aspect-auto md:min-h-80 md:w-1/2 md:rounded-xl"
                />

                <div className="flex min-w-0 flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold lg:text-4xl">
                            {game.name}
                        </h1>

                        <div className="flex flex-wrap items-center gap-2 text-sm">
                            <span className="text-[#E5C158]">
                                ⭐ {game.rating.toFixed(1)}
                                <span className="text-[#F2E4D1]"> / 5</span>
                            </span>

                            {game.metacritic !== undefined && (
                                <span className={chipClass}>
                                    Metacritic {game.metacritic}
                                </span>
                            )}

                            {game.esrb_rating && (
                                <span className={chipClass}>
                                    {game.esrb_rating}
                                </span>
                            )}

                            <span className={chipClass}>
                                {releaseLabel(game.released, game.isTba)}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-2xl font-bold text-[#E5C158] lg:text-3xl">
                            ${GAME_PRICE.toFixed(2)}
                        </p>

                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                            <button
                                type="button"
                                onClick={handleCartClick}
                                className={`${controlClass} ${
                                    isInCart
                                        ? 'bg-gray-700 text-[#F2E4D1] hover:bg-gray-600'
                                        : 'bg-[#E5C158] text-gray-700 hover:bg-[#F5D77A] hover:text-[#0d1b2e]'
                                }`}
                            >
                                <Cart size="sm" fill="currentColor" />
                                {isInCart ? 'In Cart' : 'Add to Cart'}
                            </button>

                            <button
                                type="button"
                                onClick={handleWishlistClick}
                                aria-label={
                                    isInWishlist
                                        ? `Remove ${game.name} from wishlist`
                                        : `Add ${game.name} to wishlist`
                                }
                                className={`${controlClass} border ${
                                    isInWishlist
                                        ? 'border-[#E5C158] bg-[#E5C158] text-gray-700 hover:bg-[#F5D77A] hover:text-[#0d1b2e]'
                                        : 'border-gray-600 text-[#F2E4D1] hover:border-[#E5C158] hover:text-[#E5C158]'
                                }`}
                            >
                                <Heart size="sm" fill="currentColor" />
                                {isInWishlist ? 'Wishlisted' : 'Wishlist'}
                            </button>
                        </div>
                    </div>

                    <dl className="flex flex-col gap-2 text-sm">
                        {game.genres && game.genres.length > 0 && (
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                                <dt className="w-24 shrink-0 text-[#E5C158]">
                                    Genres
                                </dt>
                                <dd className="min-w-0">
                                    <Chips items={game.genres} />
                                </dd>
                            </div>
                        )}

                        {game.platforms && game.platforms.length > 0 && (
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                                <dt className="w-24 shrink-0 text-[#E5C158]">
                                    Platforms
                                </dt>
                                <dd className="min-w-0">
                                    <Chips items={game.platforms} />
                                </dd>
                            </div>
                        )}

                        {game.stores && game.stores.length > 0 && (
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                                <dt className="w-24 shrink-0 text-[#E5C158]">
                                    Stores
                                </dt>
                                <dd className="min-w-0">
                                    <Chips items={game.stores} />
                                </dd>
                            </div>
                        )}

                        {game.developers && game.developers.length > 0 && (
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                                <dt className="w-24 shrink-0 text-[#E5C158]">
                                    Developer
                                </dt>
                                <dd className="min-w-0">
                                    <Chips items={game.developers} />
                                </dd>
                            </div>
                        )}

                        {game.publishers && game.publishers.length > 0 && (
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                                <dt className="w-24 shrink-0 text-[#E5C158]">
                                    Publisher
                                </dt>
                                <dd className="min-w-0">
                                    <Chips items={game.publishers} />
                                </dd>
                            </div>
                        )}

                        {game.playtime !== undefined && game.playtime > 0 && (
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                                <dt className="w-24 shrink-0 text-[#E5C158]">
                                    Playtime
                                </dt>
                                <dd>{game.playtime} hours</dd>
                            </div>
                        )}

                        {game.ratings_count !== undefined &&
                            game.ratings_count > 0 && (
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                                    <dt className="w-24 shrink-0 text-[#E5C158]">
                                        Ratings
                                    </dt>
                                    <dd>
                                        {game.ratings_count.toLocaleString()}
                                    </dd>
                                </div>
                            )}
                    </dl>
                </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-2">
                <h2 className="text-lg font-bold lg:text-xl">About</h2>

                <p className="max-w-4xl text-center text-sm leading-relaxed">
                    {game.description ||
                        'No description available for this game.'}
                </p>
            </div>
        </div>
    )
}
