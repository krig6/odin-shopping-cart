import { Star } from '@boxicons/react'

const RATINGS = [5, 4, 3, 2, 1]

export const RatingFilter = () => (
    <fieldset>
        <legend>Rating</legend>
        {RATINGS.map((rating) => (
            <label key={rating} htmlFor={`rating-${rating}`}>
                <input id={`rating-${rating}`} type="checkbox" value={rating} />

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
