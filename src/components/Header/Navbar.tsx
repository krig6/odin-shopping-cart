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
                <li key={link.label}>
                    <Link
                        to={link.to}
                        className="relative text-[#F2E4D1] after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-[#E5C158] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
)
