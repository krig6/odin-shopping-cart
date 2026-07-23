import { Star } from '@boxicons/react'

const RATINGS = [5, 4, 3, 2, 1]

type RatingFilterProps = {
    selectedRating: number
    onChange: (rating: number) => void
}

export const RatingFilter = ({
    selectedRating,
    onChange,
}: RatingFilterProps) => (
    <fieldset>
        <legend>Rating</legend>
        {RATINGS.map((rating) => (
            <label key={rating} htmlFor={`rating-${rating}`}>
                <input
                    id={`rating-${rating}`}
                    type="radio"
                    value={rating}
                    checked={selectedRating === rating}
                    onChange={() => onChange(rating)}
                />

                {Array.from({ length: 5 }, (_, index) =>
                    index < rating ? (
                        <Star key={index} fill="#FFC000" />
                    ) : (
                        <Star key={index} fill="#808080" />
                    )
                )}
                <span>& Up</span>
            </label>
        ))}
    </fieldset>
)
