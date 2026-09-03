import { GenreFilter } from './GenreFilter'
import { RatingFilter } from './RatingFilter'

type FilterProps = {
    selectedGenres: string[]
    selectedRating: number | undefined
    onGenreChange: (genre: string) => void
    onRatingChange: (rating: number) => void
}

export const Filters = ({
    selectedGenres,
    selectedRating,
    onGenreChange,
    onRatingChange,
}: FilterProps) => {
    return (
        <>
            <header>
                <h3>Filters</h3>
                <button type="button">Clear All</button>
            </header>

            <GenreFilter
                selectedGenres={selectedGenres}
                onChange={onGenreChange}
            />

            <RatingFilter
                selectedRating={selectedRating}
                onChange={onRatingChange}
            />
        </>
    )
}
