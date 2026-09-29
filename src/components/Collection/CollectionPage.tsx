import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ChevronLeft } from '@boxicons/react'

type CollectionPageProps = {
    title: string
    subtitle: string
    isEmpty: boolean
    emptyState: ReactNode
    aside?: ReactNode
    children: ReactNode
}

export const CollectionPage = ({
    title,
    subtitle,
    isEmpty,
    emptyState,
    aside,
    children,
}: CollectionPageProps) => (
    <div className="mt-8 flex flex-col gap-2 text-[#F2E4D1] lg:mx-10 xl:mx-40">
        <div className="flex flex-col gap-2">
            <Link to="/shop" className="flex w-fit items-center">
                <ChevronLeft size="md" />
                <span className="text-md">Continue Shopping</span>
            </Link>
            <header className="mx-3">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold lg:text-4xl">{title}</h1>
                    {isEmpty ? (
                        emptyState
                    ) : (
                        <p className="text-sm">{subtitle}</p>
                    )}
                </div>
            </header>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
            <section className="m-2 flex flex-1 flex-col gap-3">
                {children}
            </section>
            {aside}
        </div>
    </div>
)
