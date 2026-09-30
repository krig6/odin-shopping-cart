import { fetchApiGame, fetchApiGames } from './rawgApi'
import type { Game } from '../type/game'
import type { FetchGamesParams } from './rawgApi'
import { USE_MOCK_DATA } from '../config'
import { fetchMockGame, fetchMockGames } from './mockGameService'
import placeholder from '../assets/images/placeholder.png'

export type GamesResult = {
    games: Game[]
    count: number
}

const resolveImage = (url: string | null | undefined) =>
    url && url !== 'null' ? url : placeholder

const stripHtml = (html: string) =>
    html
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

const toNames = (items?: { name: string }[]) => items?.map((item) => item.name)

export const fetchGames = async (
    params?: FetchGamesParams,
    options?: { signal?: AbortSignal }
): Promise<GamesResult> => {
    if (USE_MOCK_DATA) {
        return fetchMockGames()
    }

    const data = await fetchApiGames(params, options?.signal)

    return {
        games: data.results.map((game) => ({
            id: game.id,
            name: game.name,
            background_image: resolveImage(game.background_image),
            rating: game.rating,
        })),
        count: data.count,
    }
}

export const fetchGame = async (
    id: number,
    options?: { signal?: AbortSignal }
): Promise<Game> => {
    if (USE_MOCK_DATA) {
        return fetchMockGame(id)
    }

    const data = await fetchApiGame(id, options?.signal)

    return {
        id: data.id,
        name: data.name,
        background_image: resolveImage(data.background_image),
        rating: data.rating,
        released: data.released || undefined,
        isTba: data.tba,
        description: stripHtml(data.description ?? ''),
        metacritic: data.metacritic ?? undefined,
        esrb_rating: data.esrb_rating?.name,
        genres: toNames(data.genres),
        developers: toNames(data.developers),
        publishers: toNames(data.publishers),
        platforms: toNames(
            data.parent_platforms?.map((entry) => entry.platform)
        ),
        stores: toNames(data.stores?.map((entry) => entry.store)),
        playtime: data.playtime,
        ratings_count: data.ratings_count,
    }
}
