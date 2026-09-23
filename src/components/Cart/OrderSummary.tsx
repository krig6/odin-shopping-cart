import type { CartItem } from '../../type/cart'

type OrderSummaryProps = {
    items: CartItem[]
}
export const OrderSummary = ({ items }: OrderSummaryProps) => {
    const subtotal = items
        .reduce((total, item) => item.quantity * item.price + total, 0)
        .toFixed(2)

    const estimatedTax = items
        .reduce((total, item) => item.price * 0.12 * item.quantity + total, 0)
        .toFixed(2)

    const totalItems = items.reduce((total, item) => item.quantity + total, 0)

    return (
        <div>
            <div>
                <h2>Order Summary</h2>
                <div>
                    <h4>Items({totalItems})</h4>
                    <p>${subtotal}</p>
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
                    <h2>${Number(subtotal) + Number(estimatedTax)}</h2>
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
