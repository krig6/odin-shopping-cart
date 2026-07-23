import { useEffect, useState } from 'react'
import type { Genre } from '../../type/genre'
import { fetchGenres } from '../../services/genreService'

type GenreFilterProps = {
    selectedGenres: number[]
    onChange: (genreId: number) => void
}
export const GenreFilter = ({ selectedGenres, onChange }: GenreFilterProps) => {
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
                        checked={selectedGenres.includes(genre.id)}
                        onChange={() => onChange(genre.id)}
                    />
                    {genre.name}
                </label>
            ))}
        </fieldset>
    )
}
