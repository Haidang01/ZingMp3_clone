import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ISong } from '../../../interfaces/music';

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-zingmp3-vercel.vercel.app/api/',
  }),
  tagTypes: ['Songs'],
  endpoints: builder => ({
    // ? Query: Get All Products
    getSongs: builder.query<any, void>({
      query() {
        return 'home';
      },
      transformResponse: (response: any) => response.data.items,
    }),
    // ? Query: Get a single Song
    getSong: builder.query<ISong, string>({
      query(id) {
        return `infosong?id=${id}`;
      },
      transformResponse: (response: any) => response.data,
    }),
    // ? Query: Get a single album
    getAlbum: builder.query<any, string>({
      query(pid) {
        return `detailplaylist?id=${pid}`;
      },
      transformResponse: (response: any) => response.data,
    }),
    // ? Query: Get a single album
    getMusic: builder.query<any, string>({
      query(id) {
        return `song?id=${id}`;
      },
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const {
  useGetAlbumQuery,
  useGetSongsQuery,
  useGetSongQuery,
  usePrefetch,
  useGetMusicQuery,
} = homeApi;
