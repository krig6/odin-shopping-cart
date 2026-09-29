import { CollectionPage } from './CollectionPage'
import { CollectionEmpty } from './CollectionEmpty'
import { CartProduct } from './CartProduct'
import { OrderSummary } from './OrderSummary'
import { useCart } from '../../context/useCart'

export const Cart = () => {
    const { items } = useCart()

    return (
        <CollectionPage
            title="My Cart"
            subtitle="Review your games before checkout"
            isEmpty={items.length === 0}
            emptyState={<CollectionEmpty message="Your cart is empty." />}
            aside={items.length >= 1 ? <OrderSummary /> : undefined}
        >
            {items.map((item) => (
                <CartProduct key={item.game.id} item={item} />
            ))}
        </CollectionPage>
    )
}
