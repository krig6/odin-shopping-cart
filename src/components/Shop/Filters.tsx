import { GenreFilter } from './GenreFilter'
import { RatingFilter } from './RatingFilter'

type FilterProps = {
    selectedGenres: string[]
    selectedRating: number | undefined
    onGenreChange: (genre: string) => void
    onRatingChange: (rating: number) => void
    onClear: () => void
}

export const Filters = ({
    selectedGenres,
    selectedRating,
    onGenreChange,
    onRatingChange,
    onClear,
}: FilterProps) => {
    return (
        <>
            <GenreFilter
                selectedGenres={selectedGenres}
                onChange={onGenreChange}
            />

            <RatingFilter
                selectedRating={selectedRating}
                onChange={onRatingChange}
            />

            <footer className="flex">
                <button
                    type="button"
                    className="cursor-pointer rounded-md bg-gray-700 px-3 py-1.5 text-sm font-bold text-gray-50 transition-colors hover:bg-[#E5C158] hover:text-[#0d1b2e] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95"
                    onClick={onClear}
                >
                    Clear Filters
                </button>
            </footer>
        </>
    )
}
