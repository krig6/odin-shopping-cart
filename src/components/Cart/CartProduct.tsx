import type { CartItem } from '../../type/cart'
import { Plus, Minus, TrashAlt } from '@boxicons/react'

type CartProductProps = {
    item: CartItem
}

export const CartProduct = ({ item }: CartProductProps) => {
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
                    <Plus />
                    {item.quantity}
                    <Minus />
                </div>

                <div>
                    ${(item.price * item.quantity).toFixed(2)}
                    <TrashAlt />
                </div>
            </div>
        </section>
    )
}
