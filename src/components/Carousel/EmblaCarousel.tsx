import { useEffect } from 'react'
import { useGames } from '../../hooks/useGames'
import { CarouselSlide } from './CarouselSlide'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import type { EmblaOptionsType } from 'embla-carousel'
import { ChevronDown, ChevronUp } from '@boxicons/react'
import Autoplay from 'embla-carousel-autoplay'
import { CarouselSkeleton, ErrorState } from '../Loading/Skeletons'

type PropType = {
    options?: EmblaOptionsType
    startIndex?: number
}

const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false })

export const EmblaCarousel = (props: PropType) => {
    const { options, startIndex } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay])
    const { games, isPending, error, refetch } = useGames({
        dates: '2026-01-01,2026-12-31',
        page_size: 5,
    })

    useEffect(() => {
        if (!emblaApi || games.length === 0) return

        emblaApi.reInit()

        if (startIndex !== undefined) {
            emblaApi.scrollTo(startIndex, true)
        }
    }, [emblaApi, games, startIndex])

    if (isPending) {
        return <CarouselSkeleton />
    }

    if (error) {
        return (
            <ErrorState
                message="We couldn't load these games."
                onRetry={refetch}
            />
        )
    }

    return (
        <div className="embla mt-5">
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
