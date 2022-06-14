import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./auth/index";
import alertReducer from "./alert/index";

export const store = configureStore({
  reducer: {
    // auth: authReducer,1
    alert: alertReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
