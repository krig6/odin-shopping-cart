import { BrowseByGenre } from '../BrowseByGenre/BrowseByGenre'
import { CallToAction } from '../CallToAction'
import { EmblaCarousel } from '../Carousel/EmblaCarousel'
import { PopularGames } from '../PopularGames/PopularGames'
import { StoreFeatures } from '../StoreFeatures'

export const Homepage = () => {
    return (
        <main>
            <EmblaCarousel />
            <PopularGames />
            <BrowseByGenre />
            <CallToAction />
            <StoreFeatures />
        </main>
    )
}
