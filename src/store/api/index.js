// import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";

// const basaQuary = async (api, argument, extraoptions) => {
//   const rawfetchBaseQuary = fetchBaseQuery({
//     baseUrl: "http://localhost:3000/",
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   });

//   const response = await rawfetchBaseQuary(argument, api, extraoptions);

//   if (response.error) {
//     const { status } = response.error;
//     if (status === 401 || status === 403) {
//       // dispatchEvent()
//     }
//   }

//   return response;
// };

// const fetchBaseQueryWithRetry = retry(basaQuary, { maxRetries: 0 });

// export const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQueryWithRetry,
//   tagTypes: ["BOOK"],
//   endpoints: () => ({}),
// });
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const fetchBaseQueryWithRetry = retry(
  fetchBaseQuery({
    baseUrl: "https://6718988a7fc4c5ff8f4a1f17.mockapi.io/person/?",
  }),
  { maxRetries: 0 }
);

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQueryWithRetry,
  tagTypes: ["BOOK"],
  endpoints: () => ({}),
});
