import { useEffect, useState } from 'react'
import type { Genre } from '../../type/genre'
import { fetchGenres } from '../../services/genreService'

export const GenreFilter = () => {
    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        fetchGenres().then(setGenres)
    }, [])

    return (
        <fieldset>
            <legend>Genre</legend>
            {genres.map((genre) => (
                <label key={genre.id} htmlFor={`genre-${genre.id}`}>
                    <input
                        id={`genre-${genre.id}`}
                        type="checkbox"
                        value={genre.id}
                    />
                    {genre.name}
                </label>
            ))}
        </fieldset>
    )
}
