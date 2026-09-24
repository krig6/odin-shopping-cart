type SearchBoxProps = {
    className?: string
}
export const SearchBox = ({ className }: SearchBoxProps) => (
    <input
        className={`rounded-full bg-[#334155] px-4 py-1 text-[#E5C158] outline-[#E5C158] ${className}`}
        type="text"
        placeholder="Search..."
    />
)
