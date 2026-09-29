import { Link } from 'react-router'
import { useCart } from '../../context/useCart'
import { CartCountBadge } from './CartCountBadge'

const LINKS = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/cart', label: 'Cart' },
    { to: '/wishlist', label: 'Wishlist' },
]

export const Navbar = () => {
    const { totalItems } = useCart()

    return (
        <nav>
            <ul className="flex flex-col items-center gap-6 lg:flex-row">
                {LINKS.map((link) => (
                    <li key={link.label}>
                        <Link
                            to={link.to}
                            aria-label={
                                link.to === '/cart' && totalItems > 0
                                    ? `Cart, ${totalItems} items`
                                    : undefined
                            }
                            className="relative text-[#F2E4D1] after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-[#E5C158] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                            {link.to === '/cart' && (
                                <CartCountBadge count={totalItems} />
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
