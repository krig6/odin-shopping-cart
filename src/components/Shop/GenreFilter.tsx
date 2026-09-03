const GAME_GENRES = [
    'Action',
    'Adventure',
    'Arcade',
    'Board Games',
    'Card',
    'Casual',
    'Educational',
    'Family',
    'Fighting',
    'Indie',
    'Massively Multiplayer',
    'Platformer',
    'Puzzle',
    'Racing',
    'RPG',
    'Shooter',
    'Simulation',
    'Sports',
    'Strategy',
]

type GenreFilterProps = {
    selectedGenres: string[]
    onChange: (genre: string) => void
}

export const GenreFilter = ({ selectedGenres, onChange }: GenreFilterProps) => (
    <fieldset>
        <legend>Genre</legend>
        {GAME_GENRES.map((genre) => (
            <label key={genre} htmlFor={`genre-${genre.toLowerCase}`}>
                <input
                    id={`genre-${genre.toLowerCase}`}
                    type="checkbox"
                    value={genre}
                    checked={selectedGenres.includes(genre)}
                    onChange={() => onChange(genre)}
                />
                {genre}
            </label>
        ))}
    </fieldset>
)
