import { useContext } from 'react'
import { CartContext } from './CartContext'

export const useCart = () => {
    const cart = useContext(CartContext)

    if (cart === null) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return cart
}
