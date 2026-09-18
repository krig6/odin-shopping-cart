import { mockGames } from '../data/mockGames.ts'
import type { GamesResult } from './gameService.ts'

export const fetchMockGames = async (): Promise<GamesResult> => {
    return { games: mockGames, count: mockGames.length }
}
