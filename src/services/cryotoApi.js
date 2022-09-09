import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '86c3f03dd5msh82f2cac36188ad7p136acajsn4a58aff1240d'
}
const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest =(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi= createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>(
        {
            getCryptos:builder.query({
                query:(count)=> createRequest(`/coins?limit=${count}`)
            }),
            getCryptosDetails:builder.query({
                query:(coinId)=>createRequest(`/coin/${coinId}`)
            }),
            getCryptosHistory: builder.query({
                query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
            }),
            getExchanges: builder.query({
                query: () => createRequest('/exchanges'),
              }),
        }
    )
});

export const{
    useGetCryptosQuery,
    useGetCryptosDetailsQuery,
    useGetCryptosHistoryQuery,
    useGetExchangesQuery,
}= cryptoApi;

