import type { EmblaOptionsType } from 'embla-carousel'
import { BrowseByGenre } from '../BrowseByGenre/BrowseByGenre'
import { CallToAction } from '../CallToAction'
import { EmblaCarousel } from '../Carousel/EmblaCarousel'
import { PopularGames } from '../PopularGames/PopularGames'
import { StoreFeatures } from '../StoreFeatures'

const OPTIONS: EmblaOptionsType = { axis: 'y' }

export const Homepage = () => {
    return (
        <main>
            <EmblaCarousel options={OPTIONS} />
            <PopularGames />
            <BrowseByGenre />
            <CallToAction />
            <StoreFeatures />
        </main>
    )
}
