import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistsDetailsQuery } from "../redux/services/shazam";

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { id: artistId } = useParams();

  const {
    data: artistData,
    isFetshing: isFetchingArtistDetails,
    error,
  } = useGetArtistsDetailsQuery(artistId);

  const songs = artistData?.resources?.songs
    ? Object.values(artistData?.resources?.songs)
    : [];

  isFetchingArtistDetails && (
    <Loader title="Fetching artist details... please wait" />
  );

  error && <Error />;

  console.log(artistData?.resources?.artists[artistId]);

  return (
    <div>
      <DetailsHeader
        artistId={artistId}
        artistData={artistData?.resources?.artists[artistId]}
      />

      <RelatedSongs
        data={songs}
        isPlaying={isPlaying}
        activeSong={activeSong}
        artistId={artistId}
      />
    </div>
  );
};

export default ArtistDetails;
