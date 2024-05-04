export default function VideoPlayer({ src }) {
  return (
    <iframe
      className=" h-[25vh] md:h-[45vh] lg:h-[80vh] xl:h-screen 2xl:h-[70vh] w-full  rounded"
      src={src}
      title="Youtube Player"
      allowFullScreen
    />
  );
}
