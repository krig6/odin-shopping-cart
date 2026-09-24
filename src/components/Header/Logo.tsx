import { Link } from 'react-router'
import logo from '../../assets/images/logo.svg'

export const Logo = () => (
    <Link
        to="/"
        className="group flex shrink-0 items-center gap-2.5 text-xl font-bold tracking-tight"
    >
        <img
            className="h-15 w-auto transition-transform duration-300 ease-out group-hover:scale-110"
            src={logo}
            alt="Odinforge"
        />
        <span className="text-[#F2E4D1]">Odinforge</span>
    </Link>
)
