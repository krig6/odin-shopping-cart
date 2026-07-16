import type { Game } from '../../type/game'

type CarouselSlideProps = {
    game: GameCard
}

export const CarouselSlide = ({ game }: CarouselSlideProps) => (
    <article>
        <img src={game.background_image} alt={game.name} />

        <div>
            <h3>{game.name}</h3>

            <span aria-label={`Rating: ${game.rating} out of 5`}>
                ⭐ {game.rating}
            </span>
        </div>
    </article>
)
