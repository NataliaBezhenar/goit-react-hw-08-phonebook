import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filter-reducer";
import { contactApi } from "./contact/contactSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export { store };
