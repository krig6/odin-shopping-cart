import { useEffect, useState } from 'react'
import { fetchGenres } from '../../services/genreService'
import type { Genre } from '../../type/genre'
import { GenreCard } from './GenreCard'

export const BrowseByGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        fetchGenres({
            page_size: 6,
        }).then(setGenres)
    }, [])

    return (
        <section>
            <h2 className="py-5 text-xl font-bold text-white">
                Browse by Gennre
            </h2>
            <div className="grid w-full grid-cols-6 gap-8">
                {genres.map((genre) => (
                    <GenreCard genre={genre} key={genre.id} />
                ))}
            </div>
        </section>
    )
}
