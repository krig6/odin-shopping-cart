import { useEffect, useState } from 'react'
import { fetchGenreCards } from '../../services/genreService'
import type { Genre } from '../../type/genre'

export const BrowseByGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        fetchGenreCards({
            page_size: 2,
        }).then(setGenres)
    }, [])

    return (
        <section className="browse-by-genre">
            <h2>Browse by Genre</h2>
            <div className="browse-by-genre__grid">
                {genres.map((genre) => (
                    <div className="browse-by-genre__card" key={genre.id}>
                        <h2>{genre.name}</h2>
                        <img src={genre.background_image} alt={genre.name} />
                    </div>
                ))}
            </div>
        </section>
    )
}
