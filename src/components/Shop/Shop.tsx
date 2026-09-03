import { useState } from 'react'
import { GameGrid } from './GameGrid'
import { Filters } from './Filters'

export const Shop = () => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const [selectedRating, setSelectedRating] = useState<number | undefined>()

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
                    <GameGrid
                        selectedGenres={selectedGenres}
                        selectedRating={selectedRating}
                    />
                </main>
            </div>
        </div>
    )
}
