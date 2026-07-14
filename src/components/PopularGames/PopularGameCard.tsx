import { Cart } from '@boxicons/react'
import type { GameCard } from '../../type/game'

type PopularGameCardProps = {
    game: GameCard
}

export const PopularGameCard = ({ game }: PopularGameCardProps) => (
    <article>
        <img src={game.background_image} alt={game.name} />

        <div>
            <h3>{game.name}</h3>

            <p>$49.99</p>

            <p>
                <span aria-label={`Rating: ${game.rating} out of 5`}>
                    ⭐ {game.rating}
                </span>
            </p>
            <button type="button" aria-label="Add to cart">
                <Cart />
            </button>
        </div>
    </article>
)
