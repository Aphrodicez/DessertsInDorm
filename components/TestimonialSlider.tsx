import { EmblaOptionsType } from 'embla-carousel'

import ReviewCarousel from './ReviewCarousel';

const OPTIONS: EmblaOptionsType = { loop: true, align: 'start' }
const SLIDE_COUNT = 3
const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());

const TestimonialSlider: React.FC = () => {

  return (
    <section className="py-auto px-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full lg:w-2/5">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8 text-center">
              Take a look at our users {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600">
                Feedback
              </span>
            </h2>
          </div>
          <div className="group w-full lg:w-3/5 bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
            <ReviewCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;