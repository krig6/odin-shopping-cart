import { createContext } from 'react'
import type { CartItem } from '../type/cart'
import type { Game } from '../type/game'

export type CartContextValue = {
    items: CartItem[]
    totalItems: number
    totalPrice: number
    estimatedTax: number
    addItem: (game: Game) => void
    removeItem: (gameId: number) => void
    updateQuantity: (gameId: number, quantity: number) => void
    clear: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
