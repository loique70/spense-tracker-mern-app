import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5002'}),
    endpoints: builder =>({
        getCategories: builder.query({
            query: () => '/categories',
            providesTags:['categories']
        }),
        // get label
        getLabels: builder.query({
            query: () => '/label',
            providesTags:['transaction']
        }),

         //add new Transaction
        addTransaction: builder.mutation({
            query: (initialTransaction) =>({
                url:'/transaction',
                method: 'POST',
                body: initialTransaction
            }),
            invalidatesTags:['transaction']
        }),

        //delete record
        deleteTransaction: builder.mutation({
            query: recordid =>({
                url:'transaction',
                method: 'DELETE',
                body: recordid
            }),
            invalidatesTags:['transaction']
        })
    })
   
})

export const {
    useGetCategoriesQuery,
    useGetLabelsQuery,
    useAddTransactionMutation,
    useDeleteTransactionMutation
} = apiSlice