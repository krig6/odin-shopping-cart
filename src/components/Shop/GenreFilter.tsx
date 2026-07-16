import { useEffect, useState } from 'react'
import type { Genre } from '../../type/genre'
import { fetchGenres } from '../../services/genreService'

export const GenreFilter = () => {
    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        fetchGenres().then(setGenres)
    }, [])

    return (
        <div>
            {genres.map((genre) => (
                <p key={genre.id}>{genre.name}</p>
            ))}
        </div>
    )
}
