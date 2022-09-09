import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const carsApiHeaders ={
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
    'X-RapidAPI-Key': 'cf63f40a49mshdc0a5a0b02472e0p18de0ejsn128864451c49'
}
const baseUrl='https://car-data.p.rapidapi.com';
const createRequest =(url)=>({url,headers:carsApiHeaders})
export const carsApi= createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>(
        {
            getCars:builder.query({
                query:(count)=> createRequest(`/cars?limit=${count}`)
            }),
            
        }
    )
});
export const{
    useGetCarsQuery
}= carsApi;