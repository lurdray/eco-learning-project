import { clearAuthState, setToken, setUser } from "../features/auth/authSlice";
import { baseApi } from "./base.service";

import { store } from "../store";

const dispatch = store.dispatch;

type AuthBody = {
  email: string;
  password: string;
};

type AuthResponse = {
  id: any;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
};

const authApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["AuthApi", "UserApi", "CurrentUser"],
  })
  .injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
      register: builder.mutation({
        query: (body) => {
          return {
            url: "/users",
            method: "POST",
            body,
          };
        },
      }),

      login: builder.mutation({
        query: (body) => {
          return {
            url: "/users/login",
            method: "POST",
            body,
          };
        },
        transformResponse: (response: any) => {
          // console.log(response);
          // console.log(meta);
          // console.log(arg);
          response.access_token = response.data.accessToken;
          response.user = response.data;
          return response;
        },

        onQueryStarted: async (_arg, api) => {
          try {
            const { data } = await api.queryFulfilled;
            dispatch(setToken(data));
            dispatch(setUser(data));
            localStorage.setItem(
              "user", JSON.stringify(data.user)
            );
          } catch (error) {
            console.log(error);
            // throw error;
          }
        },

        invalidatesTags: ["CurrentUser", "UserApi"],
      }),

      refresh: builder.mutation<any, any>({
        query: () => {
          return {
            url: "/auth/refresh",
            method: "GET",
          };
        },
        onQueryStarted: async (_, api) => {
          try {
            const { data }: any = await api.queryFulfilled;
            api.dispatch(setToken(data));
            localStorage.setItem(
              "refreshToken",
              data.refresh_token ?? data.data.refresh_token
            );
          } catch (error) {
            console.log(error);
            // throw error;
          }
        },
      }),

      logout: builder.mutation<any, any>({
        query: () => {
          return {
            url: "/auth/logout",
            method: "POST",
          };
        },

        onQueryStarted: async (_, api) => {
          try {
            await api.queryFulfilled;
            localStorage.removeItem("refreshToken");
            dispatch(clearAuthState());
            dispatch(baseApi.util.resetApiState());
          } catch (error) {
            console.log(error);
          }
        },

        invalidatesTags: ["UserApi"],
      }),
    }),
  });

export const { useRegisterMutation, useLoginMutation, useRefreshMutation, useLogoutMutation } =
  authApi;
