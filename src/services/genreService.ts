import type { GenreCard } from '../type/genre'
import { fetchApiGenres } from './rawgApi'
import type { FetchGenresParams } from './rawgApi'

export const fetchGenreCards = async (
    params: FetchGenresParams
): Promise<GenreCard[]> => {
    const data = await fetchApiGenres(params)

    return data.results.map((genre) => ({
        id: genre.id,
        name: genre.name,
        background_image: genre.background_image,
    }))
}
