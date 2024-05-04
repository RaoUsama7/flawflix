import { useQuery } from '@tanstack/react-query';
import { MdPlayCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import getPost from '../../api/getPostApi';
import { Error, Loading } from './';

export default function Videos() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: getPost,
  });

  const videoFetchData = data?.slice(-10);

  if (isLoading) return <Loading />;

  if (isFetching) return <Loading />;

  if (error) return <Error />;

  return (
    <div className=" flex  flex-wrap items-center justify-center justify-items-center   gap-5 sm:flex-row  ">
      {/*  Video laptop section Start from here */}

      {videoFetchData.reverse().map((i, idx) => (
        <div
          key={idx}
          className="hidden rounded-t-2xl rounded-b-lg bg-[#414a4c] md:block "
        >
          <div className="group relative mb-1 h-48 w-40 overflow-hidden rounded-t-lg bg-black shadow-lg drop-shadow-xl lg:h-80 lg:w-60">
            <Link to={`/posts/${i._id}`}>
              <img
                className="h-48 w-40 transform rounded-t-lg object-cover shadow-lg drop-shadow-xl backdrop-opacity-100 duration-700 group-hover:scale-110 lg:h-80 lg:w-60"
                src={i.imgUrl}
              />

              <div className="absolute inset-y-full h-full w-full transform opacity-20 shadow-2xl duration-500 group-hover:-inset-y-0"></div>

              <div className="absolute inset-y-3/4 h-full w-full transform bg-gradient-to-t from-black duration-500 group-hover:-inset-y-0">
                <div className="absolute mt-20 flex w-full place-content-center">
                  <MdPlayCircleOutline
                    size={75}
                    className="mt-5 w-4/5 text-center font-sans text-white"
                  />
                </div>
              </div>
            </Link>
          </div>

          <Link
            to="/"
            className="mt-4 block pl-2 text-[10px]  font-extralight uppercase text-purple-200 hover:scale-95  hover:transition-transform   hover:duration-200 hover:ease-in-out"
          >
            {i.genre.map((tag) => `${tag} ${' '}`)}
          </Link>
          <Link
            to={`/posts/${i._id}`}
            className="-mt-0.5 block pl-2 text-lg uppercase hover:scale-95 hover:text-purple-600 hover:transition-transform hover:duration-200   hover:ease-in-out lg:text-2xl "
          >
            {i.title.slice(0, 12)}
          </Link>
        </div>
      ))}

      {/* For Mobile View */}

      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className=" flex pl-3 md:hidden"
      >
        {videoFetchData?.map((i, idx) => (
          <SwiperSlide
            key={idx}
            className=" h-64 w-40 rounded-t-2xl rounded-b-lg bg-[#414a4c] shadow-lg "
          >
            <div className="mb-1  overflow-hidden rounded-t-lg bg-black shadow-lg drop-shadow-xl ">
              <Link to={`/posts/${i._id}`}>
                <img
                  className="h-48 w-40 transform rounded-t-lg object-cover shadow-lg drop-shadow-xl backdrop-opacity-100 duration-700 group-hover:scale-110 lg:h-80 lg:w-60"
                  src={i.imgUrl}
                />
              </Link>
            </div>

            <Link
              to="/"
              className="mt-4 block pl-2 text-[10px]  font-extralight uppercase text-purple-200 hover:scale-95  hover:transition-transform   hover:duration-200 hover:ease-in-out"
            >
              {i.genre.map((tag) => `${tag} ${' '}`)}
            </Link>
            <Link
              to={`/posts/${i._id}`}
              className="-mt-0.5 block pl-2 text-base capitalize hover:scale-95 hover:text-purple-600 hover:transition-transform hover:duration-200   hover:ease-in-out  "
            >
              {i.title.slice(0, 15)}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
