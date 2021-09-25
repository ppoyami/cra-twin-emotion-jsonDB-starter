import axios from 'axios';
import PostsAPI from './postsAPI';

const client = axios.create({
  baseURL: 'http://localhost:4000',
});

const postAPI = new PostsAPI(client);
export default postAPI;
