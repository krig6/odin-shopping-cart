import type { GameCard } from '../../type/game'

type CarouselSlideProps = {
    game: GameCard
}

export const CarouselSlide = ({ game }: CarouselSlideProps) => (
    <div className="embla__slide">
        <img src={game.background_image} alt={game.name} />
        <div>
            <h2>{game.name}</h2>
            <span>⭐ {game.rating}</span>
        </div>
    </div>
)
