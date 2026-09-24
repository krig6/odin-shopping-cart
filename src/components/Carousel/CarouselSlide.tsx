import type { Game } from '../../type/game'

type CarouselSlideProps = {
    game: Game
}

export const CarouselSlide = ({ game }: CarouselSlideProps) => (
    <article className="embla__slide">
        <img src={game.background_image} alt={game.name} />

        <div className="embla__slide-overlay" />

        <div className="embla__slide-content">
            <h3 className="embla__slide-title">{game.name}</h3>

            <span className="embla__slide-rating">
                <span className="embla__slide-rating-star" aria-hidden="true">
                    ★
                </span>
                <span aria-label={`Rating: ${game.rating} out of 5`}>
                    {game.rating.toFixed(1)}
                </span>
                <span className="embla__slide-rating-max">/ 5</span>
            </span>
        </div>
    </article>
)

