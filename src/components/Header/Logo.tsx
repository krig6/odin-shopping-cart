import { Link } from 'react-router'
import logo from '../../assets/images/logo.svg'

export const Logo = () => (
    <Link
        to="/"
        className="group flex shrink-0 items-center gap-2.5 text-xl font-bold tracking-tight text-white"
    >
        <img
            className="h-10 w-auto transition-transform duration-300 ease-out group-hover:scale-110"
            src={logo}
            alt="GameHaven"
        />
        <span>
            Game<span className="text-blue-500">Haven</span>
        </span>
    </Link>
)
