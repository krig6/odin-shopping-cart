import { GenreFilter } from './GenreFilter'
import { RatingFilter } from './RatingFilter'

export const Filters = () => (
    <aside>
        <header>
            <h3>Filters</h3>
            <button type="button">Clear All</button>
        </header>
        <GenreFilter />
        <RatingFilter />
    </aside>
)
