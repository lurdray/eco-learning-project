import { blockchainApi } from "./blockchain.service";

const tokenApi = blockchainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    sendReward: builder.mutation({
      query: (body) => {
        return {
          url: "/send-reward/",
          method: "POST",
          body,
        };
      },
    }),

    getTransactions: builder.query({
      query: (walletAddress) => `/view-rewards/${walletAddress}/`,
    }),
  }),
});

export const { useSendRewardMutation, useGetTransactionsQuery } = tokenApi;
