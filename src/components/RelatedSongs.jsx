import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
  artistId,
}) => {
  console.log(data);
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      <div className="md-6 w-full flex flex-col ">
        {data?.map((song, i) => (
          <SongBar
            key={`${song.id}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
