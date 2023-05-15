import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const billboardApi = createApi({
  reducerPath: "billboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://billboard-api5.p.rapidapi.com/api/charts",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "a3531ddad3msh35dc2f5862028a5p14ef04jsn95155fbc9398"
      );
      headers.set("X-RapidAPI-Host", "billboard-api5.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/hot-100/?week=2022-10-08",
    }),
  }),
});

export const { useGetTopChartsQuery } = billboardApi;
