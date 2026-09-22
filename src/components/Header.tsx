import { Navbar } from './Navbar'
import { SearchBox } from './SearchBox'
import { HeaderActions } from './HeaderActions'
import { Logo } from './Logo'

export const Header = () => (
    <header className="flex items-center gap-10 px-8 py-5 text-lg text-[#F8FAFC]">
        <Logo />
        <Navbar />
        <SearchBox />
        <HeaderActions />
    </header>
)
