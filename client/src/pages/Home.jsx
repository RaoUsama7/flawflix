import { Separator, Slide, Videos } from '../components';

export default function Home() {
  return (
    <>
      <Slide />
      <div className=" mx-auto max-w-screen-2xl">
        <Separator />
        <Videos />

      </div>
    </>
  );
}
