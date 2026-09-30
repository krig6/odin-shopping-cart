import { useState, type ReactNode } from 'react'
import { WishlistContext } from './WishlistContext'
import type { WishlistItem } from '../type/wishlist'
import type { Game } from '../type/game'
import { GAME_PRICE } from '../config'

type WishlistProviderProps = {
    children: ReactNode
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
    const [items, setItems] = useState<WishlistItem[]>([])

    const totalItems = Number(
        items.reduce((sum, item) => sum + item.quantity, 0).toFixed(2)
    )

    const totalPrice = Number(
        items
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2)
    )

    const addItem = (game: Game) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.game.id === game.id
            )

            if (existingItem) {
                return prevItems
            }

            return [...prevItems, { game, quantity: 1, price: GAME_PRICE }]
        })
    }

    const removeItem = (gameId: number) => {
        setItems((prevItems) =>
            prevItems.filter((item) => item.game.id !== gameId)
        )
    }

    const updateQuantity = (gameId: number, quantity: number) => {
        setItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.game.id === gameId ? { ...item, quantity } : item
                )
                .filter((item) => item.quantity >= 1)
        )
    }

    const clear = () => setItems([])

    return (
        <WishlistContext.Provider
            value={{
                items,
                totalItems,
                totalPrice,
                addItem,
                removeItem,
                updateQuantity,
                clear,
            }}
        >
            {children}
        </WishlistContext.Provider>
    )
}
