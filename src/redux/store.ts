import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { homeApi } from './apis/Music/MusicApi';
import homeReducer from './features/home/homeSlice';
import musicReducer from './features/home/musicSlice';
import sectionReducer from './features/home/sectionSlice';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
const musicConfig = {
  key: 'music',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['currentSongId', 'duration', 'isRepeat'],
};

const persistedReducer = persistReducer<ReturnType<typeof musicReducer>>(
  musicConfig,
  musicReducer,
);
const rootReducer = combineReducers({
  homeReducer,
  sectionReducer,
  music: persistedReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    homeApi.middleware,
  ],
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
