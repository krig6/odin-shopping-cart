import { useEffect, useState } from 'react'
import { fetchGenres } from '../../services/genreService'
import type { Genre } from '../../type/genre'
import { GenreCard } from './GenreCard'

export const BrowseByGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        fetchGenres({
            page_size: 2,
        }).then(setGenres)
    }, [])

    return (
        <section className="browse-by-genre">
            <h2>Browse by Genre</h2>
            <div>
                {genres.map((genre) => (
                    <GenreCard genre={genre} key={genre.id} />
                ))}
            </div>
        </section>
    )
}
