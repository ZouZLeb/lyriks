import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopifyApi = createApi({
  reducerPath: "shopifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify23.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY);
      headers.set("X-RapidAPI-Host", "spotify23.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchClickedSong: builder.query({
      query: (searchQuery) => `/tracks/?q=${searchQuery}`,
    }),
  }),
});

export const { useSearchClickedSongQuery } = shopifyApi;
