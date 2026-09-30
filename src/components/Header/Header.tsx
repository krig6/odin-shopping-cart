import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Navbar } from './Navbar'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'
import { CartCountBadge } from './CartCountBadge'
import { useCart } from '../../context/useCart'
import { Menu, X, Cart } from '@boxicons/react'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const { totalItems } = useCart()
    const { pathname } = useLocation()
    const [lastPathname, setLastPathname] = useState<string>(pathname)

    if (lastPathname !== pathname) {
        setLastPathname(pathname)
        setIsMenuOpen(false)
    }

    useEffect(() => {
        if (!isMenuOpen) return

        const { documentElement, body } = document
        const previousDocumentOverflow = documentElement.style.overflow
        const previousBodyOverflow = body.style.overflow

        documentElement.style.overflow = 'hidden'
        body.style.overflow = 'hidden'

        return () => {
            documentElement.style.overflow = previousDocumentOverflow
            body.style.overflow = previousBodyOverflow
        }
    }, [isMenuOpen])

    return (
        <header className="relative z-40 text-[#F2E4D1]">
            <div className="relative z-10 flex items-center gap-10 p-4 max-[425px]:gap-4 md:px-8 md:py-5 md:text-lg">
                <Logo />

                <SearchBox className="min-w-0 flex-1 lg:mx-auto lg:grow-0 lg:basis-80" />

                <div className="flex items-center gap-3 lg:gap-10">
                    <div className="hidden lg:block">
                        <Navbar />
                    </div>

                    <Link
                        to="/cart"
                        aria-label={
                            totalItems > 0
                                ? `Cart, ${totalItems} items`
                                : 'Cart'
                        }
                        className="relative cursor-pointer transition-colors hover:text-[#E5C158] lg:hidden"
                    >
                        <Cart fill="currentColor" />
                        <CartCountBadge count={totalItems} />
                    </Link>

                    <button
                        type="button"
                        className="lg:hidden"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
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
            </div>

            <div
                aria-hidden={!isMenuOpen}
                className={`fixed inset-0 z-0 flex flex-col items-center justify-center gap-6 overflow-y-auto bg-[#0d1b2e] px-8 py-24 transition-[transform,opacity] duration-300 ease-out md:py-32 lg:hidden ${
                    isMenuOpen
                        ? 'pointer-events-auto translate-x-0 opacity-100'
                        : 'pointer-events-none translate-x-full opacity-0'
                }`}
            >
                <Navbar />
            </div>
        </header>
    )
}
