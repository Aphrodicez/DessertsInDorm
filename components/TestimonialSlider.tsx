import React, { useState } from 'react';
import ReviewCarousel from './ReviewCarousel';

const testimonials = [
  {
    id: 1,
    name: 'Jane D',
    role: 'CEO',
    image: 'https://pagedone.io/asset/uploads/1696229969.png',
    rating: 5,
    feedback: 'The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.',
  },
  {
    id: 2,
    name: 'Harsh P',
    role: 'Product Designer',
    image: 'https://pagedone.io/asset/uploads/1696229994.png',
    rating: 5,
    feedback: 'Pagedone has made the process so much simpler and stress-free.',
  },
  // Add more testimonials as needed
];

import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 3
const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full lg:w-2/5">
            <span className="text-sm text-gray-500 font-medium mb-4 block">Testimonial</span>
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
              23k+ Customers gave their{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600">
                Feedback
              </span>
            </h2>
          </div>
          <div className="group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
          <ReviewCarousel slides = {SLIDES} options = {OPTIONS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;