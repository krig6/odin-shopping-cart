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
        <div className="text-white">
            <aside>
                <Filters
                    selectedGenres={selectedGenres}
                    selectedRating={selectedRating}
                    onGenreChange={handleGenreChange}
                    onRatingChange={handleRatingChange}
                />
            </aside>

            <GameGrid
                selectedGenres={selectedGenres}
                selectedRating={selectedRating}
            />
        </div>
    )
}
