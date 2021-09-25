import { createAsyncThunk } from '@reduxjs/toolkit';
import postAPI from '@/services';

export const loadPosts = createAsyncThunk('posts/load', async (_, thunkAPI) => {
  try {
    return await postAPI.getPosts();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const createPost = createAsyncThunk(
  'posts/create',
  async (data, thunkAPI) => {
    try {
      return await postAPI.createPost(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const updatePost = createAsyncThunk(
  'posts/update',
  async (data, thunkAPI) => {
    try {
      const { id, ...rest } = data;
      return await postAPI.updatePost(id, rest);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

export const deletePost = createAsyncThunk(
  'posts/delete',
  async (data, thunkAPI) => {
    try {
      return await postAPI.deletePost(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);
