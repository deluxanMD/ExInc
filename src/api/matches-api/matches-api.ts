import {
  BaseQueryFn,
  createApi,
  EndpointBuilder,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { X_RAPID_API_KEY, X_RAPID_API_HOST } from '@env';

export const matchesApi = createApi({
  reducerPath: 'matchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/',
    prepareHeaders: (headers: Headers) => {
      headers.set('X-RapidAPI-Key', X_RAPID_API_KEY);
      headers.set('X-RapidAPI-Host', X_RAPID_API_HOST);
      return headers;
    },
  }),
  endpoints: (
    builder: EndpointBuilder<
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      'matchesApi'
    >,
  ) => ({
    getLiveMatches: builder.query({
      query: () => 'live',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLiveMatchesQuery } = matchesApi;
