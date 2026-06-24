import { fetchApiGames } from './rawgApi'

export const fetchTopRatedGames = () =>
    fetchApiGames({
        ordering: '-rating',
        page_size: 5,
    })

export const fetchPopularGames = () =>
    fetchApiGames({
        ordering: '-added',
        page_size: 5,
    })
