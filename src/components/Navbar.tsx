import { Link } from 'react-router'

export const Navbar = () => (
    <nav className="flex-1">
        <ul className="flex justify-center gap-10">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
        </ul>
    </nav>
)
