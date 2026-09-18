import { useState, useEffect } from 'react'
import type { Game } from '../../type/game'
import { GameGrid } from './GameGrid'
import { Filters } from './Filters'
import { fetchGames } from '../../services/gameService'

export const Shop = () => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const [selectedRating, setSelectedRating] = useState<number | undefined>()
    const [page, setPage] = useState<number>(1)
    const [games, setGames] = useState<Game[]>([])
    const [count, setCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        fetchGames({
            genres: selectedGenres.join(','),
            page: 1,
            page_size: 15,
        }).then(({ games, count }) => {
            setGames(games)
            setCount(count)
            setIsLoading(false)
        })
    }, [selectedGenres])

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
            page_size: 15,
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
        <div className="px-8 py-10 text-white">
            <div className="mx-auto flex max-w-7xl gap-8">
                <aside className="w-56 shrink-0">
                    <Filters
                        selectedGenres={selectedGenres}
                        selectedRating={selectedRating}
                        onGenreChange={handleGenreChange}
                        onRatingChange={handleRatingChange}
                    />
                </aside>

                <main className="min-w-0 flex-1">
                    <GameGrid games={filteredGames} />
                </main>
            </div>
            {hasMore && (
                <button type="button" onClick={handleLoadMore}>
                    Load More
                </button>
            )}
        </div>
    )
}
