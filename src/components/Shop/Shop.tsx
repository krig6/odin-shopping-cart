import { useState, useEffect } from 'react'
import type { Game } from '../../type/game'
import { GameGrid } from './GameGrid'
import { Filters } from './Filters'
import { fetchGames } from '../../services/gameService'
import { MenuFilter, X } from '@boxicons/react'

export const Shop = () => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const [selectedRating, setSelectedRating] = useState<number | undefined>()
    const [page, setPage] = useState<number>(1)
    const [games, setGames] = useState<Game[]>([])
    const [count, setCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

    useEffect(() => {
        fetchGames({
            genres: selectedGenres.join(','),
            page: 1,
            page_size: 50,
        }).then(({ games, count }) => {
            setGames(games)
            setCount(count)
            setIsLoading(false)
        })
    }, [selectedGenres])

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
        setIsLoading(true)
        setSelectedGenres((prev) =>
            prev.includes(slug)
                ? prev.filter((selectedSlug) => selectedSlug !== slug)
                : [...prev, slug]
        )
        setPage(1)
    }

    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating)
    }

    const handleLoadMore = async () => {
        setIsLoading(true)
        const nextPage = page + 1
        const { games: nextGames } = await fetchGames({
            genres: selectedGenres.join(','),
            page: nextPage,
            page_size: 10,
        })

        setGames((prev) => [...prev, ...nextGames])
        setPage(nextPage)
        setIsLoading(false)
    }

    const filteredGames = games.filter(
        (game) => selectedRating === undefined || game.rating >= selectedRating
    )

    const hasMore = games.length < count && isLoading !== true

    return (
        <div className="mt-5 px-2 text-white lg:mx-auto lg:flex lg:max-w-7xl lg:gap-8">
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

            <main className="mt-5 min-w-0 flex-1">
                <GameGrid games={filteredGames} />
            </main>

            {hasMore && (
                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        onClick={handleLoadMore}
                        className="cursor-pointer text-[#E5C158] transition hover:text-[#F5D77A]"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    )
}
