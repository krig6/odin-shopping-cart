import { Link } from 'react-router'
import { Heart, Cart } from '@boxicons/react'

export const HeaderActions = () => (
    <div className="flex items-center gap-10 text-[#F2E4D1]">
        <Link to="/wishlist">
            <button
                type="button"
                className="cursor-pointer transition-colors hover:text-[#E5C158]"
                aria-label="Wishlist"
            >
                <Heart fill="currentColor" />
            </button>
        </Link>

        <Link to="/cart">
            <button
                type="button"
                className="cursor-pointer transition-colors hover:text-[#E5C158]"
                aria-label="Cart"
            >
                <Cart fill="currentColor" />
            </button>
        </Link>
    </div>
)
