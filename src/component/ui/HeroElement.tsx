import React from 'react';
import { OrbitingCirclesDemo } from '../OrbitingCirclesDemo';
import { ResponsiveOrbitingCircles } from '../ResponsiveOrbitingCircles';

function HeroElement() {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="block md:hidden">
          <ResponsiveOrbitingCircles />
        </div>

        <div className="hidden md:block">
          <OrbitingCirclesDemo />
        </div>
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen w-full space-y-4"
        style={{ backdropFilter: 'blur(0.9px)' }}
      >
        <div className="mb-4 space-y-4 px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold whitespace-normal sm:whitespace-nowrap">
            We have really sped up our workflow
          </h1>
          <div className="mt-6 space-y-2">
            <p className="text-base sm:text-sm md:text-base text-[#475467]">
              <span className="font-bold text-[#4a576a]">
                We have just released a new update!
              </span>
            </p>
            <p className="text-base sm:text-sm md:text-base text-[#475467]">
              Check out all new dashboard view pages. They now load faster,
              and you can try us for free for 30 days.
            </p>
          </div>
          <p className="text-base sm:text-sm md:text-base text-[#475467]">
            Join 4000+ companies already growing.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 px-4 sm:px-6">
          <button className="bg-white border px-6 py-3 text-base sm:text-lg font-semibold rounded-lg flex items-center justify-center">
            <span className="mr-2">
              <svg
                fill="currentColor"
                height="1em"
                width="1em"
                viewBox="0 0 330 330"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                    s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                    c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
            </span>
            Start Learning Today
          </button>
          <button className="bg-[#7f56d9] text-white px-6 py-3 text-base sm:text-lg font-semibold rounded-lg flex items-center justify-center border border-[#7f56d9]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroElement;
