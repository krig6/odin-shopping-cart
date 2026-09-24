import { useState } from 'react'
import { Link } from 'react-router'
import { Navbar } from './Navbar'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'
import { Menu, X, Cart } from '@boxicons/react'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <header className="relative flex items-center gap-10 p-4 text-[#F2E4D1] max-[425px]:gap-4 md:px-8 md:py-5 md:text-lg">
            <Logo />

            <SearchBox className="min-w-0 flex-1 lg:mx-auto lg:grow-0 lg:basis-80" />

            <div className="flex items-center gap-3 lg:gap-10">
                <div className="hidden lg:block">
                    <Navbar />
                </div>

                <Link
                    to="/cart"
                    aria-label="Cart"
                    className="cursor-pointer transition-colors hover:text-[#E5C158] lg:hidden"
                >
                    <Cart fill="currentColor" />
                </Link>

                <button
                    type="button"
                    className="lg:hidden"
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
            </div>

            <div
                className={`absolute top-full left-0 flex h-screen w-full flex-col gap-6 bg-[#0d1b2e] px-8 py-6 shadow-lg transition-transform duration-300 ease-out lg:hidden ${
                    isMenuOpen
                        ? 'translate-x-0'
                        : 'pointer-events-none translate-x-full'
                }`}
            >
                <Navbar />
            </div>
        </header>
    )
}
