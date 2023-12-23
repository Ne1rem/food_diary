import { configureStore } from '@reduxjs/toolkit';
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

import { authReducer } from './Auth/authSlices';
import { userReducer } from './User/userSlice';
import { foodReducer } from './Food/FoodSlices';
import { intakeReducer } from './Diary/diarySlice';
import { waterReducer } from './Water/WaterSlices';

const tokenPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const userPersistorConfig = {
  key: 'user',
  storage,
  whitelist: ['user', 'statistics'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(tokenPersistConfig, authReducer),
    user: persistReducer(userPersistorConfig, userReducer),
    food: foodReducer,
    intake: intakeReducer,
    water: waterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

