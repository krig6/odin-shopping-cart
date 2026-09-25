import { useEffect, useState } from 'react'
import { fetchGames } from '../../services/gameService'
import { GameCard, gameCardWrapperClass } from './GameCard'
import type { Game } from '../../type/game'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaArrowButtons'

export const RecentlyUpdated = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        axis: 'x',
        loop: true,
    })
    const [games, setGames] = useState<Game[]>([])
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi)

    useEffect(() => {
        fetchGames({
            ordering: '-updated',
            page_size: 10,
        }).then(({ games }) => {
            setGames(games)
        })
    }, [])

    return (
        <section className="text-[#F2E4D1] md:mx-1">
            <div className="flex items-center justify-between gap-4 py-5">
                <h2 className="text-xl font-bold">Recently Updated</h2>

                <div className="flex items-center gap-2">
                    <PrevButton
                        disabled={prevBtnDisabled}
                        onClick={onPrevButtonClick}
                        aria-label="Previous games"
                    />
                    <NextButton
                        disabled={nextBtnDisabled}
                        onClick={onNextButtonClick}
                        aria-label="Next games"
                    />
                </div>
            </div>

            <div className="overflow-hidden pb-4" ref={emblaRef}>
                <div className="flex touch-pan-y gap-4">
                    {games.map((game) => (
                        <div key={game.id} className={gameCardWrapperClass}>
                            <GameCard game={game} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
