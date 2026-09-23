import { useState, type ReactNode } from 'react'
import { CartContext } from './CartContext'
import type { CartItem } from '../type/cart'
import type { Game } from '../type/game'

type CartProviderProps = {
    children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [items, setItems] = useState<CartItem[]>([])

    const totalItems = Number(
        items.reduce((sum, item) => sum + item.quantity, 0).toFixed(2)
    )

    const totalPrice = Number(
        items
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2)
    )

    const estimatedTax = Number((totalPrice * 0.12).toFixed(2))

    const addItem = (game: Game) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.game.id === game.id
            )

            if (existingItem) {
                return prevItems
            }

            return [...prevItems, { game, quantity: 1, price: 49.99 }]
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
        <CartContext.Provider
            value={{
                items,
                totalItems,
                totalPrice,
                estimatedTax,
                addItem,
                removeItem,
                updateQuantity,
                clear,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
