import { Link } from 'react-router'
import logo from '../../assets/images/logo.svg'

export const Logo = () => (
    <Link to="/" className="group flex shrink-0 items-center gap-2">
        <img
            className="h-10 w-auto transition-transform duration-300 ease-out group-hover:scale-110 md:h-15"
            src={logo}
            alt="Odinforge"
        />
        <span className="hidden text-2xl font-bold text-[#F2E4D1] lg:block">
            Odinforge
        </span>
    </Link>
)

