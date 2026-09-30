import type { EmblaOptionsType } from 'embla-carousel'
import { EmblaCarousel } from '../Carousel/EmblaCarousel'
import { PopularGames } from '../GameShowcase/PopularGames'
import { RecentlyUpdated } from '../GameShowcase/RecentlyUpdated'
import { StoreFeatures } from '../StoreFeatures'
import { CallToAction } from '../CallToAction'
import { TopRatedGames } from '../GameShowcase/TopRatedGames'

const OPTIONS: EmblaOptionsType = { axis: 'y', loop: true }

export const Homepage = () => {
    return (
        <main className="mx-4 sm:mx-16 lg:mx-40">
            <EmblaCarousel options={OPTIONS} startIndex={2} />
            <div className="mt-12 flex flex-col gap-12">
                <PopularGames />
                <TopRatedGames />
                <CallToAction />
                <RecentlyUpdated />
                <StoreFeatures />
            </div>
        </main>
    )
}
