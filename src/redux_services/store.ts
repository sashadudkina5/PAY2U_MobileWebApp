import { configureStore } from "@reduxjs/toolkit";

// Assuming you have some reducers, for example:
// import usersReducer from '../features/users/usersSlice';
// import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    // users: usersReducer,
    // posts: postsReducer,
  },
});
