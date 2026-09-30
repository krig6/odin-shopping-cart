import { gameGridClass } from '../Shop/GameGrid'

type SkeletonProps = {
    className?: string
}

export const Skeleton = ({ className = '' }: SkeletonProps) => (
    <div
        aria-hidden="true"
        className={`skeleton-shimmer animate-shimmer rounded-md bg-gray-700/40 ${className}`}
    />
)

export const Spinner = ({ className = '' }: SkeletonProps) => (
    <span
        aria-hidden="true"
        className={`inline-block size-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
    />
)

export const GameCardSkeleton = () => (
    <div aria-hidden="true" className="rounded-lg border border-gray-600">
        <Skeleton className="h-30 w-full rounded-t-lg rounded-br-none rounded-bl-none md:h-40 xl:aspect-2/3 xl:h-full" />

        <div className="p-2.5">
            <Skeleton className="h-4 w-3/4" />

            <div className="mt-1.5 flex items-center justify-between">
                <div className="mr-auto flex flex-col gap-1">
                    <Skeleton className="h-3.5 w-10" />
                    <Skeleton className="h-3 w-8" />
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                    <Skeleton className="h-8 w-8 rounded-md" />
                    <Skeleton className="h-8 w-8 rounded-md" />
                </div>
            </div>
        </div>
    </div>
)

export const GameDetailSkeleton = () => (
    <div
        role="status"
        aria-label="Loading game"
        className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pt-6 md:flex-row md:items-stretch md:gap-10 md:px-8"
    >
        <Skeleton className="aspect-4/3 w-full shrink-0 md:aspect-auto md:min-h-80 md:w-1/2" />

        <div className="flex min-w-0 flex-1 flex-col gap-3">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-6 w-24" />
            <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                <Skeleton className="h-11 w-full sm:w-40" />
                <Skeleton className="h-11 w-full sm:w-40" />
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
                {Array.from({ length: 5 }, (_, index) => (
                    <Skeleton key={index} className="h-6 w-16 rounded-full" />
                ))}
            </div>
            <div className="flex flex-col gap-2 pt-2">
                {Array.from({ length: 5 }, (_, index) => (
                    <Skeleton key={index} className="h-3.5 w-full" />
                ))}
            </div>
        </div>
    </div>
)

type GameGridSkeletonProps = {
    count?: number
}

export const GameGridSkeleton = ({ count = 10 }: GameGridSkeletonProps) => (
    <div className={gameGridClass} role="status" aria-label="Loading games">
        {Array.from({ length: count }, (_, index) => (
            <GameCardSkeleton key={index} />
        ))}
    </div>
)

export const CarouselSkeleton = () => (
    <div className="embla mt-5" role="status" aria-label="Loading games">
        <div className="embla__viewport" aria-hidden="true">
            <Skeleton className="h-full w-full rounded-none" />
        </div>
    </div>
)

type ErrorStateProps = {
    message: string
    onRetry: () => void
}

export const ErrorState = ({ message, onRetry }: ErrorStateProps) => (
    <div
        role="alert"
        className="flex min-h-40 flex-col items-center justify-center gap-4 px-4 text-center"
    >
        <p className="text-sm text-[#F2E4D1]">{message}</p>

        <button
            type="button"
            onClick={onRetry}
            className="cursor-pointer rounded-lg bg-[#E5C158] px-6 py-3 text-base font-bold text-gray-700 transition hover:bg-[#F5D77A] hover:text-[#0d1b2e] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95"
        >
            Try Again
        </button>
    </div>
)
