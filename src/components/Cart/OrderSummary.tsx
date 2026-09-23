import { useCart } from '../../context/useCart'

export const OrderSummary = () => {
    const { totalItems, totalPrice, estimatedTax } = useCart()

    return (
        <div>
            <div>
                <h2>Order Summary</h2>
                <div>
                    <h4>Items({totalItems})</h4>
                    <p>${totalPrice}</p>
                </div>

                <div>
                    <h4>Estimated Tax</h4>
                    <p>${estimatedTax}</p>
                </div>

                <div>
                    <h4>Shipping</h4>
                    <p>Free</p>
                </div>
            </div>

            <div>
                <div>
                    <h2>Total</h2>
                    <h2>${totalPrice + estimatedTax}</h2>
                </div>

                <button type="button">Proceed to Checkout</button>

                <div>
                    <p>Secure encrypted payment</p>
                    <p>Instant digital delivery </p>
                </div>
            </div>
        </div>
    )
}
