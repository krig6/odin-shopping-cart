import { HeadphoneMic, PriceTag, Shield, Truck } from '@boxicons/react'

const STORE_FEATURES = [
    {
        icon: <Truck />,
        title: 'Instant Delivery',
        description: 'Get your games instantly',
    },
    {
        icon: <Shield />,
        title: 'Secure Payment',
        description: '100% secure checkout',
    },
    {
        icon: <PriceTag />,
        title: 'Great Prices',
        description: 'Best deals always',
    },
    {
        icon: <HeadphoneMic />,
        title: '24/7 Support',
        description: "We're here to help",
    },
]

export const StoreFeatures = () => (
    <section className="grid grid-cols-2 gap-2 text-[#F2E4D1] lg:flex lg:gap-4">
        {STORE_FEATURES.map((feature) => (
            <article
                key={feature.title}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-gray-700 p-3 text-center lg:flex-1 lg:flex-row lg:justify-center lg:gap-4"
            >
                <div className="text-[#F2E4D1]">{feature.icon}</div>
                <div className="flex flex-col items-center gap-0.5">
                    <h4 className="text-xs leading-snug font-semibold sm:text-sm lg:text-base">
                        {feature.title}
                    </h4>
                    <p className="text-[11px] font-medium sm:text-xs lg:text-sm">
                        {feature.description}
                    </p>
                </div>
            </article>
        ))}
    </section>
)
