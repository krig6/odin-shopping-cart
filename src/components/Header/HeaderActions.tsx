import { Link } from 'react-router'
import { Heart, Cart } from '@boxicons/react'

export const HeaderActions = () => (
    <div className="flex gap-10">
        <Heart />
        <Link to="/cart">
            <Cart />
        </Link>
    </div>
)
