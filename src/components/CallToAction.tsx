import ctaImage from '../assets/images/cta/cta.png'

export const CallToAction = () => (
    <section className="relative h-120 overflow-hidden">
        <img
            src={ctaImage}
            alt="Call To Action Image"
            className="h-full w-full object-cover object-[center_45%]"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <p className="text-lg font-semibold">MEGA SALE</p>
            <h2 className="text-2xl font-extrabold">UP TO 70% OFF</h2>
            <p className="text-sm">Get amazing deals on thousands of games.</p>

            <button className="mt-4 cursor-pointer rounded-md bg-blue-500 px-5 py-2 font-semibold">
                Shop Now
            </button>
        </div>
    </section>
)
