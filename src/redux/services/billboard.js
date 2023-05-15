import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const billboardApi = createApi({
  reducerPath: "billboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://billboard-api5.p.rapidapi.com/api/charts",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY);
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
