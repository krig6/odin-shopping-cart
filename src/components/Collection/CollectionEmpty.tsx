import { Link } from 'react-router'

type CollectionEmptyProps = {
    message: string
    actionLabel?: string
    actionTo?: string
}

export const CollectionEmpty = ({
    message,
    actionLabel = 'Shop Now',
    actionTo = '/shop',
}: CollectionEmptyProps) => (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
        <p className="text-center text-5xl text-[#F2E4D1]">{message}</p>
        <Link to={actionTo} className="mt-2 inline-block">
            <button
                type="button"
                className="cursor-pointer rounded-lg bg-[#E5C158] px-6 py-3 text-base font-bold text-gray-700 transition hover:bg-[#F5D77A] hover:text-[#0d1b2e] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none active:scale-95 sm:px-8 sm:py-3.5 sm:text-lg"
            >
                {actionLabel}
            </button>
        </Link>
    </div>
)
