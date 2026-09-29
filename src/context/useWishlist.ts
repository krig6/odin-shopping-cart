import { useContext } from 'react'
import { WishlistContext } from './WishlistContext'

export const useWishlist = () => {
    const wishlist = useContext(WishlistContext)

    if (wishlist === null) {
        throw new Error('useWishlist must be used within a WishlistProvider')
    }

    return wishlist
}
