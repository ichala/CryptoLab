import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CoinsApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPIKEY,
};
console.log(process.env.RAPIDAPIKEY);
const createRequest = (url) => ({ url, headers: CoinsApiHeaders });

export const CoinsApi = createApi({
  reducerPath: "CoinsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (count) => createRequest("/coins?limit=" + count),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),

    //   getExchanges: builder.query({
    //     query: () => createRequest('/exchanges'),
    //   }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCryptoDetailsQuery,

  useGetCryptoHistoryQuery,
} = CoinsApi;
