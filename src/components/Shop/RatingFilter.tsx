import { Star } from '@boxicons/react'

const RATINGS = [5, 4, 3, 2, 1]

export const RatingFilter = () => (
    <div>
        {RATINGS.map((rating) => (
            <div>
                <div key={rating}>
                    {Array.from({ length: 5 }, (_, index) =>
                        index < rating ? (
                            <Star key={index} fill="#FFC000" />
                        ) : (
                            <Star key={index} fill="#808080" />
                        )
                    )}
                </div>
                <span>& Up</span>
            </div>
        ))}
    </div>
)
