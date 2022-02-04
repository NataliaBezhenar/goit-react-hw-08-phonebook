import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61f3e8f010f0f7001768c730.mockapi.io/",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => "contacts",
      providesTags: ["Contact"],
    }),
    createConatct: builder.mutation({
      query: (contact) => ({
        url: "contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contact"],
    }),
    transformResponse: (response) => response.data,
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useCreateConatctMutation,
  useDeleteContactMutation,
} = contactApi;
