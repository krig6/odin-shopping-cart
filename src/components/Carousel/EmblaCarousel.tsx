import { useEffect, useState } from 'react'
import { fetchGameCards } from '../../services/gameService'
import { CarouselSlide } from './CarouselSlide'
import type { GameCard } from '../../type/game'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'

export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const [games, setGames] = useState<GameCard[]>([])

    useEffect(() => {
        fetchGameCards({
            dates: '2026-01-01,2026-12-31',
            page_size: 5,
        }).then(setGames)
    }, [])

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {games.map((game) => (
                        <CarouselSlide key={game.id} game={game} />
                    ))}
                </div>
            </div>

            <button className="embla__prev" onClick={scrollPrev}>
                Previous
            </button>

            <button className="embla__next" onClick={scrollNext}>
                Next
            </button>
        </div>
    )
}
