import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {baseApi} from './services/base.service';

import authReducer from './features/auth/authSlice';
import { blockchainApi } from './services/blockchain.service';


export const store = configureStore({
  reducer: {
    auth: authReducer,

    [baseApi.reducerPath]: baseApi.reducer,
    [blockchainApi.reducerPath]: blockchainApi.reducer

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([baseApi.middleware, blockchainApi.middleware]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
