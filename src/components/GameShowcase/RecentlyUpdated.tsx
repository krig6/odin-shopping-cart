import { useGames } from '../../hooks/useGames'
import { GameCard, gameCardWrapperClass } from './GameCard'
import { GameCardSkeleton, ErrorState } from '../Loading/Skeletons'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton } from './EmblaArrowButtons'
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons'

export const RecentlyUpdated = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        axis: 'x',
        loop: true,
        dragFree: true,
    })
    const { games, isPending, error, refetch } = useGames({
        ordering: '-updated',
        page_size: 10,
    })
    const { onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(emblaApi)

    return (
        <section className="text-[#F2E4D1] md:mx-1">
            <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold">Recently Updated</h2>

                <div className="flex items-center gap-2">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        aria-label="Previous games"
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        aria-label="Next games"
                    />
                </div>
            </div>

            {error ? (
                <ErrorState
                    message="We couldn't load recently updated games."
                    onRetry={refetch}
                />
            ) : (
                <div
                    className="overflow-hidden"
                    ref={isPending ? undefined : emblaRef}
                >
                    <div
                        className="flex touch-pan-y"
                        role={isPending ? 'status' : undefined}
                        aria-label={isPending ? 'Loading games' : undefined}
                        aria-busy={isPending}
                    >
                        {isPending
                            ? Array.from({ length: 10 }, (_, index) => (
                                  <div
                                      key={index}
                                      className={`${gameCardWrapperClass} ml-4`}
                                  >
                                      <GameCardSkeleton />
                                  </div>
                              ))
                            : games.map((game) => (
                                  <div
                                      key={game.id}
                                      className={`${gameCardWrapperClass} ml-4`}
                                  >
                                      <GameCard game={game} />
                                  </div>
                              ))}
                    </div>
                </div>
            )}
        </section>
    )
}
