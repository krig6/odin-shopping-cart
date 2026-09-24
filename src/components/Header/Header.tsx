import { useState } from 'react'
import { Navbar } from './Navbar'
import { SearchBox } from './SearchBox'
import { HeaderActions } from './HeaderActions'
import { Logo } from './Logo'
import { Menu, X, Search } from '@boxicons/react'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

    return (
        <header className="relative flex place-content-between items-center gap-10 p-4 text-[#F2E4D1] md:px-8 md:py-5 md:text-lg">
            <Logo />

            <div className="hidden min-w-0 flex-1 justify-center lg:flex">
                <Navbar />
            </div>

            <div className="hidden lg:flex lg:gap-10">
                <SearchBox />
                <HeaderActions />
            </div>

            <div className="flex flex-row gap-3 lg:hidden">
                <button
                    type="button"
                    className="ml-auto lg:hidden"
                    aria-label="Toggle search"
                    onClick={() => {
                        setIsMenuOpen(false)
                        setIsSearchOpen((prev) => !prev)
                    }}
                >
                    <Search />
                </button>

                <button
                    type="button"
                    className="ml-auto"
                    aria-label="Toggle menu"
                    onClick={() => {
                        setIsSearchOpen(false)
                        setIsMenuOpen((prev) => !prev)
                    }}
                >
                    <span
                        className={`block transition-transform duration-300 ${
                            isMenuOpen ? 'rotate-90' : 'rotate-0'
                        }`}
                    >
                        {!isMenuOpen ? <Menu /> : <X />}
                    </span>
                </button>
            </div>

            <div
                className={`absolute inset-0 z-20 flex items-center gap-2 bg-[#0d1b2e] p-4 transition-transform duration-300 ease-out lg:hidden ${
                    isSearchOpen
                        ? 'translate-x-0'
                        : 'pointer-events-none translate-x-full'
                }`}
            >
                <SearchBox className="min-w-0 flex-1" />
                <button
                    type="button"
                    aria-label="Close search"
                    onClick={() => setIsSearchOpen(false)}
                >
                    <X />
                </button>
            </div>

            <div
                className={`absolute top-full left-0 flex h-screen w-full flex-col gap-6 bg-[#0d1b2e] px-8 py-6 shadow-lg transition-transform duration-300 ease-out lg:hidden ${
                    isMenuOpen
                        ? 'translate-x-0'
                        : 'pointer-events-none translate-x-full'
                }`}
            >
                <Navbar />
                <HeaderActions />
            </div>
        </header>
    )
}

