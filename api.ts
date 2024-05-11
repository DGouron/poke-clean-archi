import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "splitApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com",
	}),
	tagTypes: ["Counter", "Time", "Post"],
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => ({ url: "posts" }),
		}),
	}),
});
