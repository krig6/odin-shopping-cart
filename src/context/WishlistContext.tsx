import { createContext } from 'react'
import type { WishlistItem } from '../type/wishlist'
import type { Game } from '../type/game'

export type WishlistContextValue = {
    items: WishlistItem[]
    totalItems: number
    totalPrice: number
    addItem: (game: Game) => void
    removeItem: (gameId: number) => void
    updateQuantity: (gameId: number, quantity: number) => void
    clear: () => void
}

export const WishlistContext = createContext<WishlistContextValue | null>(null)
