import { useState } from 'react'
import { Navbar } from './Navbar'
import { SearchBox } from './SearchBox'
import { HeaderActions } from './HeaderActions'
import { Logo } from './Logo'
import { Menu, X } from '@boxicons/react'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <header className="relative flex items-center gap-10 p-4 text-[#F2E4D1] md:px-8 md:py-5 md:text-lg">
            <Logo />

            <div className="hidden min-w-0 flex-1 justify-center lg:flex">
                <Navbar />
            </div>

            <div className="hidden lg:flex lg:gap-10">
                <SearchBox />
                <HeaderActions />
            </div>

            <button
                type="button"
                className="ml-auto lg:hidden"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <span
                    className={`block transition-transform duration-300 ${
                        isMenuOpen ? 'rotate-90' : 'rotate-0'
                    }`}
                >
                    {!isMenuOpen ? <Menu /> : <X />}
                </span>
            </button>

            <div
                className={`absolute top-full left-0 flex h-screen w-full flex-col gap-6 bg-[#0d1b2e] px-8 py-6 shadow-lg transition-transform duration-300 ease-out lg:hidden ${
                    isMenuOpen
                        ? 'translate-x-0'
                        : 'pointer-events-none translate-x-full'
                }`}
            >
                <Navbar />
                <SearchBox />
                <HeaderActions />
            </div>
        </header>
    )
}
