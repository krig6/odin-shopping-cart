import type { Genre } from '../../type/genre'

type GenreCardProps = {
    genre: Genre
}

export const GenreCard = ({ genre }: GenreCardProps) => (
    <article className="relative rounded-lg border border-gray-700">
        <img
            className="aspect-2/3 w-full rounded-t-lg object-cover"
            src={genre.background_image}
            alt={genre.name}
        />
        <h3 className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 text-sm font-semibold text-white">
            {genre.name}
        </h3>
    </article>
)
