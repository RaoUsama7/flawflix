import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Error, Loading, VideoPlayer } from '../components';
import LoadingVideo from '../components/LoadingVideo';

export default function VideoDetails() {
  const { id } = useParams();
  const postId = id;

  const { data, error, isLoading, isFetching } = useQuery(
    ['repoData', postId],
    async () => {
      const response = await axios.get(
        `https://fawflix.onrender.com/posts/${postId}`,
      );
      return response.data;
    },
  );
  if (isLoading) return <LoadingVideo />;

  if (isFetching) return <LoadingVideo />;

  if (error) return <Error />;

  return (
    <div className="mx-auto max-w-screen-2xl p-10">
      <div className="item-center">
        <VideoPlayer src={data?.videoUrl} />
        <div className="mt-8 flex flex-col gap-3 md:gap-8 lg:flex-row">
          <img
            src={data?.imgUrl}
            alt={'movie name poster'}
            className="w-ful lg:h-64 rounded lg:w-56"
          />
          <div className="mt-5">
            <div className="mb-2 text-2xl font-bold uppercase">
              {' '}
              {data?.title}{' '}
            </div>
            <div>
              Genre :
              <button className="ml-1 rounded border p-0.5 text-xs  font-extralight uppercase">
                {data?.categories}
              </button>
            </div>
            <div> Director: {data?.director} </div>
            <p>Description : {data?.description}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
