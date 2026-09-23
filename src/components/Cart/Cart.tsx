import { Link } from 'react-router'
import { ChevronLeft } from '@boxicons/react'
import { CartProduct } from './CartProduct'
import { OrderSummary } from './OrderSummary'
import { useCart } from '../../context/useCart'

export const Cart = () => {
    const { items } = useCart()

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
                    {items.map((item) => (
                        <CartProduct key={item.game.id} item={item} />
                    ))}
                </section>
                <OrderSummary />
            </div>
        </div>
    )
}
