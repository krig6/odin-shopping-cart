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
    <section className="flex justify-between rounded-md bg-gray-500 p-5 text-white">
        {STORE_FEATURES.map((feature) => (
            <article
                key={feature.title}
                className="flex flex-row items-center justify-center gap-3 text-center"
            >
                {feature.icon}
                <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-xs">{feature.description}</p>
                </div>
            </article>
        ))}
    </section>
)
