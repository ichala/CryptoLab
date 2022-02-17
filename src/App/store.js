import { configureStore } from "@reduxjs/toolkit";
import { CoinsApi } from "../ApiCalls/CoinsApi";
import { cryptoNewsApi } from "../ApiCalls/cryptoNewsApi";
export default configureStore({
  reducer: {
    [CoinsApi.reducerPath]: CoinsApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
