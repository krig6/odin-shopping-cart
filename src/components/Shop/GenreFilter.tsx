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
    <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 text-sm font-semibold tracking-wide text-slate-400 uppercase">
            Genre
        </legend>

        {GAME_GENRES.map((genre) => (
            <label
                key={genre.slug}
                htmlFor={`genre-${genre.slug}`}
                className="flex cursor-pointer items-center gap-3 text-sm text-slate-300"
            >
                <input
                    id={`genre-${genre.slug}`}
                    type="checkbox"
                    value={genre.slug}
                    checked={selectedGenres.includes(genre.slug)}
                    onChange={() => onChange(genre.slug)}
                    className="size-4 accent-blue-500"
                />
                {genre.name}
            </label>
        ))}
    </fieldset>
)
