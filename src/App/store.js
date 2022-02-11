import { configureStore } from "@reduxjs/toolkit";
import {CoinsApi} from "../ApiCalls/CoinsApi"
export default configureStore({
    reducer:{[CoinsApi.reducerPath]: CoinsApi.reducer},
});