import type { EmblaOptionsType } from 'embla-carousel'
import { BrowseByGenre } from '../BrowseByGenre/BrowseByGenre'
import { CallToAction } from '../CallToAction'
import { EmblaCarousel } from '../Carousel/EmblaCarousel'
import { PopularGames } from '../PopularGames/PopularGames'
import { StoreFeatures } from '../StoreFeatures'

const OPTIONS: EmblaOptionsType = { axis: 'y', loop: true }

export const Homepage = () => {
    return (
        <main className="mx-50">
            <EmblaCarousel options={OPTIONS} startIndex={2} />
            <PopularGames />
            <BrowseByGenre />
            <CallToAction />
            <StoreFeatures />
        </main>
    )
}
