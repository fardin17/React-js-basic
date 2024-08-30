import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonplaceholder",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (build) => ({
    getAllPosts: build.query({
      query: () => `posts`,
    }),
    createPost: build.mutation({
      query: (newpost) => ({
        url: `posts`,
        method: "POST",
        body: newpost,
      }),
    }),
    updatePost: build.mutation({
      query: (updatedPost) => ({
        url: `posts/${updatedPost.id}`,
        method: "PUT",
        body: updatedPost,
      }),
    }),
    deletePost: build.mutation({
      query: (id) => ({
        url: `posts/2`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation } =
  jsonPlaceholderApi;
