import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, ArtistCard } from "../components";

import { useGetTopChartsQuery } from "../redux/services/shazam";

const TopArtists = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);

  if (isFetching) return <Loader title="Loading Songs...." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Top Charts</h2>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((song, index) => (
          <ArtistCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
