import { Link } from 'react-router'
import { ChevronLeft } from '@boxicons/react'
import { mockGames } from '../../data/mockGames'
import { CartProduct } from './CartProduct'
import { OrderSummary } from './OrderSummary'

const MOCK_CART_ITEMS = [
    {
        game: mockGames[0],
        quantity: 3,
        price: 49.99,
    },

    {
        game: mockGames[1],
        quantity: 5,
        price: 49.99,
    },
    {
        game: mockGames[2],
        quantity: 2,
        price: 49.99,
    },

    {
        game: mockGames[3],
        quantity: 4,
        price: 49.99,
    },
]

export const Cart = () => {
    return (
        <div className="text-amber-50">
            <div>
                <header className="flex items-end justify-between">
                    <div>
                        <h1>Your Cart</h1>
                        <p>Review your games before checking out</p>
                    </div>

                    <Link to="/shop" className="flex">
                        <ChevronLeft />
                        Continue Shopping
                    </Link>
                </header>
            </div>

            <div>
                <section>
                    {MOCK_CART_ITEMS.map((item) => (
                        <CartProduct item={item} />
                    ))}
                </section>
                <OrderSummary items={MOCK_CART_ITEMS} />
            </div>
        </div>
    )
}
