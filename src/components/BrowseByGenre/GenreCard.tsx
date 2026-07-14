import type { Genre } from '../../type/genre'

type GenreCardProps = {
    genre: Genre
}

export const GenreCard = ({ genre }: GenreCardProps) => (
    <article>
        <img src={genre.background_image} alt={genre.name} />
        <h3>{genre.name}</h3>
    </article>
)
