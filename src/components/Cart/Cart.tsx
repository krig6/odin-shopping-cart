import { Link } from 'react-router'
import { ChevronLeft } from '@boxicons/react'

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
                <div className="cart-items"></div>
                <div className="order-summary"></div>
            </div>
        </div>
    )
}
