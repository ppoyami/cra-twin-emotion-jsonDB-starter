import { createSlice } from '@reduxjs/toolkit';
import {
  loadPosts,
  createPost,
  updatePost,
  deletePost,
} from '../_actions/posts';

// 리듀서 구성하기
const initialState = {
  // 전체 글 목록
  mainPosts: [],
  // 목록 가져오기
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  // 글 생성하기
  createPostLoading: false,
  createPostDone: false,
  createPostError: null,
  // 글 수정하기
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  // 글 삭제하기
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
};

// 액션 함수 작성
/* eslint-disable no-param-reassign */
const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadPosts.pending, state => {
        state.loadPostsLoading = true;
        state.loadPostsDone = false;
        state.loadPostsError = null;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.loadPostsLoading = false;
        state.mainPosts = action.payload;
        state.loadPostsDone = true;
        state.loadPostsError = null;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.loadPostsLoading = false;
        state.loadPostsDone = false;
        state.loadPostsError = action.payload;
      })
      .addCase(createPost.pending, state => {
        state.createPostLoading = true;
        state.createPostDone = false;
        state.createPostError = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.createPostLoading = false;
        state.mainPosts = action.payload;
        state.createPostDone = true;
        state.createPostError = null;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.createPostLoading = false;
        state.createPostDone = false;
        state.createPostError = action.payload;
      })
      .addCase(updatePost.pending, state => {
        state.updatePostLoading = true;
        state.updatePostDone = false;
        state.updatePostError = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.updatePostLoading = false;
        state.mainPosts = action.payload;
        state.updatePostDone = true;
        state.updatePostError = null;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.updatePostLoading = false;
        state.updatePostDone = false;
        state.createPostError = action.payload;
      })
      .addCase(deletePost.pending, state => {
        state.deletePostLoading = true;
        state.deletePostDone = false;
        state.deletePostError = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.deletePostLoading = false;
        state.mainPosts = action.payload;
        state.deletePostDone = true;
        state.deletePostError = null;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.deletePostLoading = false;
        state.deletePostDone = false;
        state.deletePostError = action.payload;
      }),
});

// 리듀서 내보내기
export default posts.reducer;
