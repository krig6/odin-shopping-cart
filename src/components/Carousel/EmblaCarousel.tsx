import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'

export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">Slide 1</div>
                    <div className="embla__slide">Slide 2</div>
                    <div className="embla__slide">Slide 3</div>
                </div>
            </div>

            <button className="embla__prev" onClick={scrollPrev}>
                Previous
            </button>

            <button className="embla__next" onClick={scrollNext}>
                Next
            </button>
        </div>
    )
}
