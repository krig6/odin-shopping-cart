import { useCart } from '../../context/useCart'
import { CheckShield, Truck } from '@boxicons/react'

export const OrderSummary = () => {
    const { totalItems, totalPrice, estimatedTax } = useCart()

    return (
        <div className="mx-3 lg:pt-5">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Order Summary</h2>
                <div className="flex place-content-between text-sm">
                    <span>Items ({totalItems})</span>
                    <p>${totalPrice.toFixed(2)}</p>
                </div>

                <div className="flex place-content-between text-sm">
                    <span>Estimated Tax</span>
                    <p>${estimatedTax.toFixed(2)}</p>
                </div>

                <div className="flex place-content-between text-sm">
                    <span>Shipping</span>
                    <p className="text-green-400">Free</p>
                </div>
            </div>

            <hr className="mx-1 my-5 text-[#F2E4D1]" />

            <div className="flex flex-col gap-4">
                <div className="flex place-content-between">
                    <h2 className="text-xl font-bold">Total</h2>
                    <p className="text-xl font-bold">
                        ${(totalPrice + estimatedTax).toFixed(2)}
                    </p>
                </div>

                <button
                    type="button"
                    className="cursor-pointer rounded-md bg-gray-700 p-2 text-lg font-bold text-gray-50"
                >
                    Checkout
                </button>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm">
                        <CheckShield height={16} width={16} />
                        <span>Secure encrypted payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Truck height={16} width={16} />
                        <span>Instant digital delivery</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
