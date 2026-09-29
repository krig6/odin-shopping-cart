import { Link } from 'react-router'
import ctaImage from '../assets/images/cta/cta.png'
import ctaMobile from '../assets/images/cta/cta-mobile.png'

export const CallToAction = () => (
    <section className="relative aspect-auto overflow-hidden rounded-2xl sm:h-100 lg:h-120">
        <picture>
            <source srcSet={ctaMobile} media="(max-width: 768px)" />
            <img
                src={ctaImage}
                alt="Call To Action Image"
                className="h-full w-full object-cover object-[center_45%] max-[768px]:object-right"
            />
        </picture>

        <div className="absolute top-1/2 left-1/2 flex w-full max-w-md -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 px-6 text-center text-[#F2E4D1]">
            <p className="text-base font-semibold tracking-widest uppercase sm:text-lg">
                Mega Sale
            </p>
            <h2 className="text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">
                Up to 70% Off
            </h2>
            <p className="text-sm text-pretty sm:text-base">
                Get amazing deals on thousands of games.
            </p>

            <Link to="/shop" className="mt-2 inline-block">
                <button
                    type="button"
                    className="cursor-pointer rounded-lg bg-[#E5C158] px-6 py-3 text-base font-bold text-gray-700 transition hover:bg-[#F5D77A] hover:text-[#0d1b2e] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95 sm:px-8 sm:py-3.5 sm:text-lg"
                >
                    Shop Now
                </button>
            </Link>
        </div>
    </section>
)
