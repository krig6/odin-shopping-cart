import { useState, type SubmitEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { X } from '@boxicons/react'

type SearchBoxProps = {
    className?: string
}

export const SearchBox = ({ className = '' }: SearchBoxProps) => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search') ?? ''

    const [value, setValue] = useState<string>(search)
    const [lastSearch, setLastSearch] = useState<string>(search)

    if (search !== lastSearch) {
        setLastSearch(search)
        setValue(search)
    }

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const query = value.trim()

        navigate(query ? `/shop?search=${encodeURIComponent(query)}` : '/shop')
    }

    return (
        <form onSubmit={handleSubmit} role="search" className={className}>
            <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#334155] pr-2 pl-4 transition focus-within:ring-2 focus-within:ring-[#E5C158] focus-within:outline-none">
                <input
                    className="min-w-0 flex-1 bg-transparent py-1 text-[#E5C158] outline-none [&::-moz-search-clear]:hidden [&::-webkit-search-cancel-button]:appearance-none"
                    type="search"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder="Search..."
                    aria-label="Search games"
                />

                {value !== '' && (
                    <button
                        type="button"
                        onClick={() => setValue('')}
                        aria-label="Clear search"
                        className="flex shrink-0 cursor-pointer items-center justify-center rounded-full p-1 text-[#F2E4D1] transition hover:bg-[#0d1b2e] hover:text-[#E5C158] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none"
                    >
                        <X size="sm" />
                    </button>
                )}
            </div>
        </form>
    )
}
