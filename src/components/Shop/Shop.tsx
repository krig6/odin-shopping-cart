import { useState, useEffect, useMemo } from 'react'
import type { Game } from '../../type/game'
import { GameGrid, gameGridClass } from './GameGrid'
import { Filters } from './Filters'
import { fetchGames } from '../../services/gameService'
import { useGames } from '../../hooks/useGames'
import {
    ErrorState,
    GameCardSkeleton,
    GameGridSkeleton,
    Spinner,
} from '../Loading/Skeletons'
import { MenuFilter, X } from '@boxicons/react'

const SKELETON_COUNT = 10

type LoadMoreState = {
    genresKey: string
    page: number
    games: Game[]
}

export const Shop = () => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const [selectedRating, setSelectedRating] = useState<number | undefined>()
    const [loadMore, setLoadMore] = useState<LoadMoreState>({
        genresKey: '',
        page: 1,
        games: [],
    })
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

    const genresKey = selectedGenres.join(',')
    const { games, count, isPending, isFetching, error, refetch } = useGames({
        genres: genresKey,
        page: 1,
        page_size: 10,
    })

    useEffect(() => {
        if (!isFilterOpen) return

        const { documentElement, body } = document
        const previousDocumentOverflow = documentElement.style.overflow
        const previousBodyOverflow = body.style.overflow

        documentElement.style.overflow = 'hidden'
        body.style.overflow = 'hidden'

        return () => {
            documentElement.style.overflow = previousDocumentOverflow
            body.style.overflow = previousBodyOverflow
        }
    }, [isFilterOpen])

    const handleGenreChange = (slug: string) => {
        setSelectedGenres((prev) =>
            prev.includes(slug)
                ? prev.filter((selectedSlug) => selectedSlug !== slug)
                : [...prev, slug]
        )
    }

    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating)
    }

    const handleLoadMore = async () => {
        setIsLoadingMore(true)
        const nextPage = loadMore.page + 1
        const { games: nextGames } = await fetchGames({
            genres: genresKey,
            page: nextPage,
            page_size: 10,
        })

        setLoadMore((prev) => ({
            genresKey,
            page: nextPage,
            games: [...prev.games, ...nextGames],
        }))
        setIsLoadingMore(false)
    }

    const allGames = useMemo(
        () =>
            loadMore.genresKey === genresKey
                ? [...games, ...loadMore.games]
                : [...games],
        [games, loadMore, genresKey]
    )

    const filteredGames = allGames.filter(
        (game) => selectedRating === undefined || game.rating >= selectedRating
    )

    const hasMore = error === null && allGames.length < count

    return (
        <div className="mt-5 px-2 pb-10 text-white lg:mx-auto lg:max-w-7xl">
            <div className="lg:flex lg:gap-8">
                <div className="relative z-30 lg:contents">
                    <div className="relative z-10 flex items-center justify-end gap-2 lg:hidden">
                        <button
                            type="button"
                            className="inline-flex cursor-pointer items-center gap-2 text-[#E5C158] transition hover:text-[#F5D77A] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none"
                            aria-label="Toggle filters"
                            aria-expanded={isFilterOpen}
                            onClick={() => setIsFilterOpen((prev) => !prev)}
                        >
                            <span className="text-sm font-semibold tracking-wide uppercase">
                                Filter:
                            </span>
                            <span
                                className={`block transition-transform duration-300 ${
                                    isFilterOpen ? 'rotate-90' : 'rotate-0'
                                }`}
                            >
                                {!isFilterOpen ? <MenuFilter /> : <X />}
                            </span>
                        </button>
                    </div>

                    <aside
                        aria-hidden={!isFilterOpen}
                        className={`fixed inset-0 z-0 mt-5 overflow-y-auto bg-[#0d1b2e] px-4 pt-24 pb-4 transition-[transform,opacity] duration-300 ease-out md:pt-36 lg:pointer-events-auto lg:static lg:z-auto lg:w-56 lg:shrink-0 lg:translate-x-0 lg:overflow-visible lg:bg-transparent lg:p-0 lg:opacity-100 ${
                            isFilterOpen
                                ? 'pointer-events-auto translate-x-0 opacity-100'
                                : 'pointer-events-none translate-x-full opacity-0'
                        }`}
                    >
                        <Filters
                            selectedGenres={selectedGenres}
                            selectedRating={selectedRating}
                            onGenreChange={handleGenreChange}
                            onRatingChange={handleRatingChange}
                        />
                    </aside>
                </div>

                <main className="mt-5 flex min-w-0 flex-1 flex-col">
                    <div
                        aria-busy={isFetching || isLoadingMore}
                        className={`transition-opacity duration-200 ${isFetching && !isPending ? 'opacity-60' : 'opacity-100'}`}
                    >
                        {isPending ? (
                            <GameGridSkeleton count={SKELETON_COUNT} />
                        ) : error ? (
                            <ErrorState
                                message="We couldn't load these games."
                                onRetry={refetch}
                            />
                        ) : (
                            <GameGrid games={filteredGames} />
                        )}
                    </div>

                    {isFetching && isPending === false && (
                        <div
                            className={`mt-4 ${gameGridClass}`}
                            role="status"
                            aria-label="Loading games"
                        >
                            {Array.from({ length: 5 }, (_, index) => (
                                <GameCardSkeleton key={index} />
                            ))}
                        </div>
                    )}

                    {(hasMore || isLoadingMore) && (
                        <div className="mt-8 flex w-full justify-center">
                            <button
                                type="button"
                                onClick={handleLoadMore}
                                disabled={isLoadingMore}
                                aria-busy={isLoadingMore}
                                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#E5C158] px-6 py-3 text-base font-bold text-gray-700 transition hover:bg-[#F5D77A] hover:text-[#0d1b2e] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:px-8 sm:py-3.5 sm:text-lg"
                            >
                                {isLoadingMore && <Spinner />}
                                {isLoadingMore ? 'Loading' : 'Load More'}
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
