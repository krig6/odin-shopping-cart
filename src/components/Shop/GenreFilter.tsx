const GAME_GENRES = [
    { name: 'Action', slug: 'action' },
    { name: 'Adventure', slug: 'adventure' },
    { name: 'Arcade', slug: 'arcade' },
    { name: 'Board Games', slug: 'board-games' },
    { name: 'Card', slug: 'card' },
    { name: 'Casual', slug: 'casual' },
    { name: 'Educational', slug: 'educational' },
    { name: 'Family', slug: 'family' },
    { name: 'Fighting', slug: 'fighting' },
    { name: 'Indie', slug: 'indie' },
    { name: 'Massively Multiplayer', slug: 'massively-multiplayer' },
    { name: 'Platformer', slug: 'platformer' },
    { name: 'Puzzle', slug: 'puzzle' },
    { name: 'Racing', slug: 'racing' },
    { name: 'RPG', slug: 'role-playing-games-rpg' },
    { name: 'Shooter', slug: 'shooter' },
    { name: 'Simulation', slug: 'simulation' },
    { name: 'Sports', slug: 'sports' },
    { name: 'Strategy', slug: 'strategy' },
]

type GenreFilterProps = {
    selectedGenres: string[]
    onChange: (genre: string) => void
}

export const GenreFilter = ({ selectedGenres, onChange }: GenreFilterProps) => (
    <fieldset>
        <legend>Genre</legend>
        {GAME_GENRES.map((genre) => (
            <label key={genre.slug} htmlFor={`genre-${genre.slug}`}>
                <input
                    id={`genre-${genre.slug}`}
                    type="checkbox"
                    value={genre.name}
                    checked={selectedGenres.includes(genre.slug)}
                    onChange={() => onChange(genre.slug)}
                />
                {genre.name}
            </label>
        ))}
    </fieldset>
)
