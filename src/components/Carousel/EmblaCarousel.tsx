import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { fetchGameCards } from '../../services/gameService'
import type { GameCard } from '../../type/game'
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
                        <div key={game.id} className="embla__slide">
                            <img src={game.background_image} alt={game.name} />
                            <div>
                                <h2>{game.name}</h2>
                                <span>⭐ {game.rating}</span>
                            </div>
                        </div>
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
