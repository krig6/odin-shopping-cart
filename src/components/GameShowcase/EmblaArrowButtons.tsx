import { useCallback, useEffect, useState } from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'
import { ChevronLeft, ChevronRight } from '@boxicons/react'

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    }
}

const buttonClass =
    'flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-600 bg-gray-800/60 text-[#F2E4D1] transition-colors hover:border-[#E5C158] hover:bg-[#E5C158] hover:text-[#0d1b2e] focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-600 disabled:hover:bg-gray-800/60 disabled:hover:text-[#F2E4D1]'

type PropType = ComponentPropsWithoutRef<'button'>

export const PrevButton = ({ children, className, ...restProps }: PropType) => {
    return (
        <button
            type="button"
            className={className ? `${buttonClass} ${className}` : buttonClass}
            {...restProps}
        >
            <ChevronLeft size="sm" />
            {children}
        </button>
    )
}

export const NextButton = ({ children, className, ...restProps }: PropType) => {
    return (
        <button
            type="button"
            className={className ? `${buttonClass} ${className}` : buttonClass}
            {...restProps}
        >
            <ChevronRight size="sm" />
            {children}
        </button>
    )
}
