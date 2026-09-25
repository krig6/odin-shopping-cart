import { Link } from 'react-router'
import { ChevronLeft } from '@boxicons/react'
import { CartProduct } from './CartProduct'
import { OrderSummary } from './OrderSummary'
import { useCart } from '../../context/useCart'

export const Cart = () => {
    const { items } = useCart()

    return (
        <div className="mt-8 flex flex-col gap-2 text-[#F2E4D1] lg:mx-10 xl:mx-40">
            <div className="flex flex-col gap-2">
                <Link to="/shop" className="flex w-fit items-center">
                    <ChevronLeft size="md" />
                    <span className="text-md">Continue Shopping</span>
                </Link>
                <header className="mx-3">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">Your Cart</h1>
                        <p className="text-sm">
                            {items.length >= 1
                                ? 'Review your games before checkout'
                                : 'Browse games and find your next favorite.'}
                        </p>
                    </div>
                </header>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row">
                <section className="m-2 flex flex-1 flex-col gap-3">
                    {items.map((item) => (
                        <CartProduct key={item.game.id} item={item} />
                    ))}
                </section>
                <OrderSummary />
            </div>
        </div>
    )
}
