import { mockGames } from '../data/mockGames.ts'
import type { Game } from '../type/game'

export const fetchMockGames = async (): Promise<Game[]> => {
    return mockGames
}
