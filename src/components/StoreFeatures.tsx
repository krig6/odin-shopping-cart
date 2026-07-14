const STORE_FEATURES = [
    {
        title: 'Instant Delivery',
        description: 'Get your games instantly',
    },
    {
        title: 'Secure Payment',
        description: '100% secure checkout',
    },
    {
        title: 'Great Prices',
        description: 'Best deals always',
    },
    {
        title: '24/7 Support',
        description: "We're here to help",
    },
]

export const StoreFeatures = () => (
    <section className="store-features">
        {STORE_FEATURES.map((feature) => (
            <article key={feature.title}>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
            </article>
        ))}
    </section>
)
