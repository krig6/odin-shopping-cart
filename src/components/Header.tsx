import { Navbar } from './Navbar'
import { SearchBox } from './SearchBox'
import { HeaderActions } from './HeaderActions'

export const Header = () => (
    <header className="flex items-center gap-10 px-8 py-5 text-lg text-[#F8FAFC]">
        <Navbar />
        <SearchBox />
        <HeaderActions />
    </header>
)
