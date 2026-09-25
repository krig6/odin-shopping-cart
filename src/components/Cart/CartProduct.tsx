import { useCart } from '../../context/useCart'
import type { CartItem } from '../../type/cart'
import { Plus, Minus, TrashAlt } from '@boxicons/react'

type CartProductProps = {
    item: CartItem
}

export const CartProduct = ({ item }: CartProductProps) => {
    const { updateQuantity, removeItem } = useCart()
    return (
        <div className="flex rounded-[18px] border border-gray-600 bg-gray-800 p-2.5 lg:rounded-[28px] lg:p-5">
            <img
                src={item.game.background_image}
                alt={item.game.name}
                className="h-30 w-25 rounded-lg object-cover lg:h-48 lg:w-40"
            />

            <div className="ml-3 flex flex-1 flex-col justify-between text-sm lg:grid lg:grid-cols-3 lg:flex-row lg:items-center lg:gap-20">
                <span className="lg:text-xl lg:font-bold">
                    {item.game.name}
                </span>

                <div className="flex items-center gap-2">
                    <span className="text-[#E5C158] lg:text-base lg:font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-md border border-gray-600 bg-gray-900 px-1 py-0.5 text-sm text-[#F2E4D1]">
                    <button
                        type="button"
                        className="cursor-pointer p-1 lg:p-2"
                        onClick={() =>
                            updateQuantity(item.game.id, item.quantity - 1)
                        }
                    >
                        <Minus
                            height={14}
                            width={14}
                            className="lg:h-5 lg:w-5"
                        />
                    </button>

                    <span className="text-[#F2E4D1] lg:text-base">
                        {item.quantity}
                    </span>

                    <button
                        type="button"
                        className="cursor-pointer p-1 lg:p-2"
                        onClick={() => {
                            updateQuantity(item.game.id, item.quantity + 1)
                        }}
                    >
                        <Plus
                            height={14}
                            width={14}
                            className="lg:h-5 lg:w-5"
                        />
                    </button>
                </div>
            </div>

            <div className="mt-auto mr-2 ml-auto lg:m-auto lg:ml-10">
                <button
                    className="cursor-pointer p-1 text-[#F2E4D1] lg:p-2"
                    type="button"
                    onClick={() => removeItem(item.game.id)}
                >
                    <TrashAlt
                        height={14}
                        width={14}
                        className="lg:h-5 lg:w-5"
                    />
                </button>
            </div>
        </div>
    )
}
