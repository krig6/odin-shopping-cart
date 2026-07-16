import type { Genre } from '../type/genre'
import { fetchApiGenres } from './rawgApi'
import type { FetchGenresParams } from './rawgApi'

export const fetchGenres = async (
    params?: FetchGenresParams
): Promise<Genre[]> => {
    const data = await fetchApiGenres(params)

    return data.results.map((genre) => ({
        id: genre.id,
        name: genre.name,
        background_image: genre.image_background,
    }))
}
