import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const testimonials = [
  {
    id: 1,
    name: '',
    role: '',
    image: 'https://image.similarpng.com/very-thumbnail/2020/07/Cute-face-emoji-vector-png.png',
    rating: 5,
    feedback: 'ลองทำแล้วทำตามได้จริงค่ะ',
  },
  {
    id: 2,
    name: '',
    role: '',
    image: 'https://image.similarpng.com/very-thumbnail/2020/07/Cute-face-emoji-vector-png.png',
    rating: 5,
    feedback: 'ชอบที่ใส่ราคาวัตถุดิบมาด้วย',
  },
  {
    id: 3,
    name: '',
    role: '',
    image: 'https://image.similarpng.com/very-thumbnail/2020/07/Cute-face-emoji-vector-png.png',
    rating: 5,
    feedback: 'ดูแล้วอยากลองทำตาม',
  },
  // Add more testimonials as needed
];

const ReviewCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="w-full lg:w-11/12">
                <div className="group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
                  <div className="flex flex-row items-center gap-5 mb-5 sm:mb-9">
                    <img className="rounded-full object-cover" src={testimonials[index].image} alt="avatar" height={56} width={56}/>
                    <div className="grid gap-1">
                      <h5 className="text-gray-900 font-medium transition-all duration-500">{testimonials[index].name}</h5>
                      <span className="text-sm leading-6 text-gray-500">{testimonials[index].role}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
                    {testimonials[index].feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewCarousel