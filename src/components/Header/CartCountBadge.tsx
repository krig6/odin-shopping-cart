type CartCountBadgeProps = {
    count: number
}

export const CartCountBadge = ({ count }: CartCountBadgeProps) => {
    if (count < 1) return null

    return (
        <span
            aria-hidden="true"
            className="absolute -top-1 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#E5C158] px-1 text-[10px] leading-none font-bold text-[#0d1b2e] lg:-right-4"
        >
            {count}
        </span>
    )
}
