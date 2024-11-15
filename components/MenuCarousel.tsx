'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'

const IMAGES: string[] = ['kanomchan', 'daifuku', 'yogurtbar']
const NAMES: string[] = ['ขนมขั้นชาไทย', 'ไดฟุกุ', 'โยเกิร์ตบาร์']
const TOOLS: string[] = ['ไมโครเวฟ', 'ไมโครเวฟ', 'ตู้เย็น']

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const MenuCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const tweenFactor = useRef(0)

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const opacity = numberWithinRange(tweenValue, 0, 1).toString()
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, tweenOpacity])

  console.log(IMAGES[1])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <Link href={`/recipe/${IMAGES[index]}`} key={index} className="embla__slide overflow-hidden">
              <div className="h-auto">
  <div className="h-5/6">
    <img
      className="object-cover rounded-3xl w-full h-full"
      src={`/${IMAGES[index]}23.jpg`}
      alt="Your alt text"
    />
  </div>
  <div className="text-base sm:text-xl font-bold text-center text-black w-full pt-2 pb-4">
    {NAMES[index]}
  </div>
  <div className="text-sm sm:text-base text-center text-black pb-2">
    สูตรง่าย ๆ ใช้เพียง {TOOLS[index]}
  </div>
</div>

            </Link>
          ))}
        </div>
      </div>

      <div className="embla__controls">
      </div>
    </div>
  )
}

export default MenuCarousel