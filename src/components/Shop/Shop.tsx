import { useState } from 'react'
import { GenreFilter } from './GenreFilter'
import { RatingFilter } from './RatingFilter'
import { GameGrid } from './GameGrid'

export const Shop = () => {
    const [selectedGenres, setSelectedGenres] = useState<number[]>([])
    const [selectedRating, setSelectedRating] = useState<number | undefined>()

    const handleGenreChange = (genreId: number) => {
        setSelectedGenres((prev) =>
            prev.includes(genreId)
                ? prev.filter((id) => id !== genreId)
                : [...prev, genreId]
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
