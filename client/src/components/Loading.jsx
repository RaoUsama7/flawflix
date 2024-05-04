import React from 'react';

export default function Loading() {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className=" flex  flex-wrap items-center justify-center justify-items-center   gap-5 sm:flex-row  ">
      {/*  Video laptop section Start from here */}

      {data.map((i, idx) => (
        <div key={idx} className="hidden  animate-pulse md:block  ">
          <div className="h-48 w-40    rounded-t-lg bg-gray-600 lg:h-80 lg:w-60 "></div>
          <div className="  h-16 rounded-b-lg  bg-gray-700"></div>
        </div>
      ))}

      {/* For Mobile View */}

      <div className=" ml-0 flex  gap-3 md:hidden">
        {data?.slice(0, 2).map((idx) => (
          <div className=" w-40   animate-pulse overflow-hidden  " key={idx}>
            <div className="  h-48 w-40 rounded-t-lg  bg-gray-600"></div>
            <div className="h-12 rounded-b-lg bg-gray-700  "> </div>
          </div>
        ))}
      </div>
    </div>
  );
}
