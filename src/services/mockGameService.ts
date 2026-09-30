import { mockGames } from '../data/mockGames.ts'
import type { GamesResult } from './gameService.ts'
import type { Game } from '../type/game'

export const fetchMockGames = async (): Promise<GamesResult> => {
    return { games: mockGames, count: mockGames.length }
}

export const fetchMockGame = async (id: number): Promise<Game> => {
    const game = mockGames.find((mockGame) => mockGame.id === id)

    if (!game) {
        throw new Error('Game not found.')
    }

    return { ...game }
}
