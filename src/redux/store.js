import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";

// import { shopifyApi } from "./services/shopify";
// import { billboardApi } from "./services/billboard";
import { shazamApi } from "./services/shazam";

export const store = configureStore({
  reducer: {
    // [shopifyApi.reducerPath]: shopifyApi.reducer,
    // [billboardApi.reducerPath]: billboardApi.reducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});
