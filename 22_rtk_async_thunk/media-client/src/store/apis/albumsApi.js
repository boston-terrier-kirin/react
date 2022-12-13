import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
import { pause } from '../thunks/pause';

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      await pause(500);
      return fetch(...args);
    },
  }),
  endpoints: (builder) => {
    return {
      fetchAlbums: builder.query({
        // 更新が走ったらキャッシュ:Albumを破棄して再検索されるようにする。
        // プラス、破棄されるのは更新したidが一致したものだけにする。
        providesTags: (result, error, user) => {
          // return [{ type: 'Album', id: user.id }];

          // fetchしたalbumの全部のidにtagをつける
          const tags = result.map((album) => ({ type: 'Album', id: album.id }));
          // userが持っているalbumにもtagをつける
          tags.push({ type: 'UsersAlbums', id: user.id });

          return tags;
        },
        query: (user) => {
          return {
            url: '/albums',
            method: 'GET',
            params: {
              userId: user.id,
            },
          };
        },
      }),
      addAlubm: builder.mutation({
        // 更新が走ったらキャッシュ:Albumを破棄して再検索されるようにする。
        // プラス、破棄されるのは更新したidが一致したものだけにする。
        invalidatesTags: (result, error, user) => {
          return [{ type: 'UsersAlbums', id: user.id }];
        },
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      removeAlubm: builder.mutation({
        // 更新が走ったらキャッシュ:Albumを破棄して再検索されるようにする。
        // プラス、破棄されるのは更新したidが一致したものだけにする。
        invalidatesTags: (result, error, album) => {
          return [{ type: 'Album', id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlubmMutation,
  useRemoveAlubmMutation,
} = albumsApi;
export { albumsApi };
