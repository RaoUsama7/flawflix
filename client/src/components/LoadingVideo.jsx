import React from 'react';

export default function LoadingVideo() {
  return (
    <div className="animate-pulse mx-auto max-w-screen-2xl p-10 items-center ">
      <div className="h-[25vh] w-full rounded bg-gray-600 md:h-[45vh] lg:h-[80vh]  xl:h-screen 2xl:h-[70vh]"></div>

      <div className="mt-8 flex flex-col gap-3 md:gap-8 lg:flex-row">
        <div className="h-64  rounded bg-gray-600 lg:w-56" />
        <div className="mt-5 w-48">
          <div className="mb-2 h-6 rounded bg-gray-600 "></div>
          <div className="mb-2 h-6 rounded bg-gray-600"></div>
          <div className="mb-2 h-6 rounded bg-gray-600 "> </div>
          <p className="mb-2 h-28 lg:w-96 rounded bg-gray-600 "></p>
        </div>
      </div>
    </div>
  );
}
