import { useEffect, useState } from 'react'
import { fetchGames } from '../../services/gameService'
import { CarouselSlide } from './CarouselSlide'
import type { Game } from '../../type/game'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import './embla.css'
import type { EmblaOptionsType } from 'embla-carousel'
import { Circle } from '@boxicons/react'

type PropType = {
    options?: EmblaOptionsType
    startIndex?: number
}

export const EmblaCarousel = (props: PropType) => {
    const { options, startIndex } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [games, setGames] = useState<Game[]>([])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    useEffect(() => {
        fetchGames({
            dates: '2026-01-01,2026-12-31',
            page_size: 5,
        }).then(setGames)
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

            <div className="embla__controls">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                        >
                            {index === selectedIndex ? (
                                <Circle pack="filled" fill="#FFFFFF" />
                            ) : (
                                <Circle fill="#64768b" height={12} width={12} />
                            )}
                        </DotButton>
                    ))}
                </div>
            </div>
        </div>
    )
}
