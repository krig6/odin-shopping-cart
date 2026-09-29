import { CollectionPage } from './CollectionPage'
import { CollectionEmpty } from './CollectionEmpty'
import { WishlistProduct } from './WishlistProduct'
import { useWishlist } from '../../context/useWishlist'

export const Wishlist = () => {
    const { items } = useWishlist()

    return (
        <CollectionPage
            title="My Wishlist"
            subtitle="Review your saved games"
            isEmpty={items.length === 0}
            emptyState={<CollectionEmpty message="Your wishlist is empty." />}
        >
            {items.map((item) => (
                <WishlistProduct key={item.game.id} item={item} />
            ))}
        </CollectionPage>
    )
}
