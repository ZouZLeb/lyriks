import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsByCountryQuery } from "../redux/services/shazam";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, setActiveSong, isPlaying } = useSelector(
    (state) => state.player
  );

  const { data, isFetching, error } = useGetTopChartsByCountryQuery(country);

  console.log(data);

  useEffect(() => {
    const getCountry = async () => {
      const options = {
        method: "GET",
        url: "https://ip-geo-location-and-ip-reputation.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": "ip-geo-location-and-ip-reputation.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setCountry(response?.data?.geo_location?.country_code);
        setCountryName(response?.data?.geo_location?.country_name);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCountry();
  }, [country]);

  if (isFetching || loading)
    return <Loader title="Loading tracks around you..." />;

  error && <Error />;

  return (
    <div className="flex flex-col ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Around You - {countryName}
        </h2>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            i={index}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
