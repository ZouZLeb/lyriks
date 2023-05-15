import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopifyApi = createApi({
  reducerPath: "shopifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify23.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "a3531ddad3msh35dc2f5862028a5p14ef04jsn95155fbc9398"
      );
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
