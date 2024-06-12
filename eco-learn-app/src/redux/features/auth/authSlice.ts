import { createSlice, current } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
interface AuthState {
  token: string | null;
  user: UserState | null;
}

const initialState: AuthState = {
  token: null,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  },
};

// const getInitialState = () => {
//   const user = localStorage.getItem("user");
//   if (user) {
//     return {
//       ...initialState,
//       user: JSON.parse(user),
//     };
//   }

//   return initialState;
// };

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    ...initialState,
    },

  reducers: {
    setToken: (state, action) => {
      const { access_token } = action.payload;
      return { ...current(state), token: access_token };
    },

    clearToken: (state) => {
      return { ...current(state), token: null };
    },

    setUser: (state, action) => {
      return {
        ...current(state),
        user: action.payload?.data ?? action.payload,
      };
    },

    clearAuthState: (state) => {
      return initialState;
    },
  },
});

export const { setToken, clearToken, setUser, clearAuthState } =
  authSlice.actions;

export const selectToken = (state: any) => state.auth.token;

export default authSlice.reducer;
