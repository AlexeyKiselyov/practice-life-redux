// import { createStore, combineReducers } from "redux";
// import { booksReduser } from "./books/booksReducers";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// const enhancer = devToolsEnhancer()

// const rootReducer = combineReducers({ books: booksReduser });

// export const store = createStore(rootReducer, enhancer);

import { configureStore } from '@reduxjs/toolkit';
// import { booksReduser } from './books/booksReducers';
import booksReduser from './books/booksSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'books',
  storage,
};

const persistedReducer = persistReducer(persistConfig, booksReduser);

export const store = configureStore({
  reducer: {
    books: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);