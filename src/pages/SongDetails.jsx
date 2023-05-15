import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

import {
  useGetSongRelatedQuery,
  useGetSongsDetailsQuery,
} from "../redux/services/shazam";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { songid } = useParams();

  const { data: songData, isFetshing: isFetchingSongDetails } =
    useGetSongsDetailsQuery(songid);

  const {
    data: songRelated,
    isFetshing: isFetchingRelated,
    error,
  } = useGetSongRelatedQuery(songid);
  console.log(songRelated);
  const data = songRelated
    ? Object.values(songRelated?.resources["shazam-songs"])
    : [];

  isFetchingRelated ||
    (isFetchingSongDetails && (
      <Loader title="Fetching song details... please wait" />
    ));

  error && <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
    console.log("paused");
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    console.log("play");
  };
  // console.log(data);
  return (
    <div>
      <DetailsHeader songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          <p className="text-gray-400 text-base my-1">
            {songData?.sections[1].type === "LYRICS"
              ? songData?.sections[1].text.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))
              : "Sorry... No lyrics found!"}
          </p>
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePlayClick={handlePlayClick}
        handlePauseClick={handlePauseClick}
      />
    </div>
  );
};

export default SongDetails;
