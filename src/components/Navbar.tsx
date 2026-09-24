import { Link } from 'react-router'

const LINKS = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/cart', label: 'Cart' },
]

export const Navbar = () => (
    <nav className="flex-1">
        <ul className="flex justify-center gap-10">
            {LINKS.map((link) => (
                <li>
                    <Link to={link.to}>{link.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
)
