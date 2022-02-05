import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filter/filter-reducer";
import { contactReducer } from "./contact";
import { authReducer } from "./auth";

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filter: filterReducer,
    contacts: contactReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };
