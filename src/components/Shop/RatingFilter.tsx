import { Star } from '@boxicons/react'

const RATINGS = [5, 4, 3, 2, 1]

type RatingFilterProps = {
    selectedRating: number | undefined
    onChange: (rating: number) => void
}

export const RatingFilter = ({
    selectedRating,
    onChange,
}: RatingFilterProps) => (
    <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 text-sm font-semibold tracking-wide text-slate-400 uppercase">
            Rating
        </legend>

        {RATINGS.map((rating) => (
            <label
                key={rating}
                htmlFor={`rating-${rating}`}
                className="flex cursor-pointer items-center gap-2 text-sm text-slate-300"
            >
                <input
                    id={`rating-${rating}`}
                    type="radio"
                    value={rating}
                    checked={selectedRating === rating}
                    onChange={() => onChange(rating)}
                    className="accent-blue-500"
                />

                <span className="flex">
                    {Array.from({ length: 5 }, (_, index) =>
                        index < rating ? (
                            <Star
                                key={index}
                                height={16}
                                width={16}
                                fill="#FFC000"
                            />
                        ) : (
                            <Star
                                key={index}
                                height={16}
                                width={16}
                                fill="#808080"
                            />
                        )
                    )}
                </span>

                <span>& Up</span>
            </label>
        ))}
    </fieldset>
)
