import { useState } from 'react'
import { GenreFilter } from './GenreFilter'
import { GameGrid } from './GameGrid'

export const Shop = () => {
    const [selectedGenres, setSelectedGenres] = useState<number[]>([])

    const handleGenreChange = (genreId: number) => {
        setSelectedGenres((prev) =>
            prev.includes(genreId)
                ? prev.filter((id) => id !== genreId)
                : [...prev, genreId]
        )
    }

    return (
        <>
            <GenreFilter
                selectedGenres={selectedGenres}
                onChange={handleGenreChange}
            />

            <GameGrid selectedGenres={selectedGenres} />
        </>
    )
}
