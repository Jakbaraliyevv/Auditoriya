import { api } from ".";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getData: build.query({
      query: () => ({
        url: "YangiNashirlar",
      }),
    }),
  }),
});

export const { useGetDataQuery } = bookApi;
