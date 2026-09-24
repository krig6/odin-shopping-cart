import { useEffect, useRef, useState } from 'react'
import { fetchGames } from '../../services/gameService'
import { CarouselSlide } from './CarouselSlide'
import type { Game } from '../../type/game'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import type { EmblaOptionsType } from 'embla-carousel'
import { ChevronDown, ChevronUp } from '@boxicons/react'
import Autoplay from 'embla-carousel-autoplay'

type PropType = {
    options?: EmblaOptionsType
    startIndex?: number
}

export const EmblaCarousel = (props: PropType) => {
    const { options, startIndex } = props
    const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current])
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetchGames({
            dates: '2026-01-01,2026-12-31',
            page_size: 5,
        }).then(({ games }) => {
            setGames(games)
        })
    }, [])

    useEffect(() => {
        if (emblaApi && games.length > 0 && startIndex !== undefined) {
            emblaApi.scrollTo(startIndex, true)
        }
    }, [emblaApi, games, startIndex])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {games.map((game) => (
                        <CarouselSlide key={game.id} game={game} />
                    ))}
                </div>
            </div>

            <div className="embla__arrows">
                <button
                    type="button"
                    className="embla__arrow"
                    aria-label="Previous slide"
                    onClick={() => emblaApi?.scrollPrev()}
                >
                    <ChevronUp />
                </button>
                <button
                    type="button"
                    className="embla__arrow"
                    aria-label="Next slide"
                    onClick={() => emblaApi?.scrollNext()}
                >
                    <ChevronDown />
                </button>
            </div>
        </div>
    )
}
