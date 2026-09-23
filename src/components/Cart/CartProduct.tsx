import { useCart } from '../../context/useCart'
import type { CartItem } from '../../type/cart'
import { Plus, Minus, TrashAlt } from '@boxicons/react'

type CartProductProps = {
    item: CartItem
}

export const CartProduct = ({ item }: CartProductProps) => {
    const { updateQuantity, removeItem } = useCart()
    return (
        <section>
            <div>
                <img src={item.game.background_image} alt={item.game.name} />
                <p>{item.game.name}</p>
                <p>{item.game.rating}</p>
                <p>${item.price.toFixed(2)}</p>
            </div>

            <div>
                <div>
                    <button
                        type="button"
                        onClick={() =>
                            updateQuantity(item.game.id, item.quantity - 1)
                        }
                    >
                        <Minus />
                    </button>

                    {item.quantity}

                    <button
                        type="button"
                        onClick={() => {
                            updateQuantity(item.game.id, item.quantity + 1)
                        }}
                    >
                        <Plus />
                    </button>
                </div>

                <div>
                    ${(item.price * item.quantity).toFixed(2)}
                    <button
                        type="button"
                        onClick={() => removeItem(item.game.id)}
                    >
                        <TrashAlt />
                    </button>
                </div>
            </div>
        </section>
    )
}
