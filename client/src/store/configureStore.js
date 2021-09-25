import { configureStore } from '@reduxjs/toolkit';
import logger from '@/middlewares/logger';
import postsReducer from './_reducers/posts';

const store = configureStore({
  reducer: { posts: postsReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
