import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY);
      headers.set("X-RapidAPI-Host", "shazam.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (country) => `charts/track?listId=ip-country-chart-US&pageSize=50`,
    }),
    getTopChartsByCountry: builder.query({
      query: (country) =>
        `charts/track?listId=ip-country-chart-${country}&pageSize=50`,
    }),
    getSongsDetails: builder.query({
      query: (songid) => `songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: (songid) =>
        `shazam-songs/list-similarities?id=track-similarities-id-${songid}`,
    }),
    getArtistsDetails: builder.query({
      query: (artistId) => `artists/get-summary?id=${artistId}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `search?term=${searchTerm}`,
    }),
    getChartGenre: builder.query({
      query: (songid) => `charts/track?listId=genre-global-chart-${songid}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistsDetailsQuery,
  useGetSongsBySearchQuery,
  useGetChartGenreQuery,
  useGetTopChartsByCountryQuery,
} = shazamApi;
