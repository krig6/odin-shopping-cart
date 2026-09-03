import { useState } from 'react'
import { GenreFilter } from './GenreFilter'
import { RatingFilter } from './RatingFilter'
import { GameGrid } from './GameGrid'

export const Shop = () => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const [selectedRating, setSelectedRating] = useState<number | undefined>()

    const handleGenreChange = (genre: string) => {
        setSelectedGenres((prev) =>
            prev.includes(genre)
                ? prev.filter((id) => id !== genre)
                : [...prev, genre]
        )
    }

    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating)
    }

    return (
        <>
            <GenreFilter
                selectedGenres={selectedGenres}
                onChange={handleGenreChange}
            />

            <RatingFilter
                selectedRating={selectedRating}
                onChange={handleRatingChange}
            />

            <GameGrid
                selectedGenres={selectedGenres}
                selectedRating={selectedRating}
            />
        </>
    )
}
