export type Game = {
    id: number
    name: string
    background_image: string
    rating: number
    released?: string
    isTba?: boolean
    description?: string
    metacritic?: number
    esrb_rating?: string
    genres?: string[]
    developers?: string[]
    publishers?: string[]
    platforms?: string[]
    stores?: string[]
    playtime?: number
    ratings_count?: number
}
