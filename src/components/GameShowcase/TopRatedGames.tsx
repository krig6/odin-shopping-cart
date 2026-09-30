import { useGames } from '../../hooks/useGames'
import { GameCard, gameCardWrapperClass } from './GameCard'
import { GameCardSkeleton, ErrorState } from '../Loading/Skeletons'
import './gameScroller.css'

const scrollerClass =
    'games-scroller flex snap-x snap-mandatory gap-4 overflow-visible overflow-x-auto xl:grid xl:w-full xl:grid-cols-6'

export const TopRatedGames = () => {
    const { games, isPending, error, refetch } = useGames({
        ordering: '-rating',
        page_size: 6,
    })

    return (
        <section className="text-[#F2E4D1] md:mx-1">
            <h2 className="mb-5 text-xl font-bold">Top Rated Games</h2>

            {error ? (
                <ErrorState
                    message="We couldn't load top rated games."
                    onRetry={refetch}
                />
            ) : (
                <div
                    className={scrollerClass}
                    role={isPending ? 'status' : undefined}
                    aria-label={isPending ? 'Loading games' : undefined}
                    aria-busy={isPending}
                >
                    {isPending
                        ? Array.from({ length: 6 }, (_, index) => (
                              <div key={index} className={gameCardWrapperClass}>
                                  <GameCardSkeleton />
                              </div>
                          ))
                        : games.map((game) => (
                              <div
                                  key={game.id}
                                  className={gameCardWrapperClass}
                              >
                                  <GameCard game={game} />
                              </div>
                          ))}
                </div>
            )}
        </section>
    )
}
