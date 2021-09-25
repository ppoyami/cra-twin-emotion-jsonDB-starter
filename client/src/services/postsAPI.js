export default class PostsAPI {
  constructor(client) {
    this.client = client;
  }

  async getPosts() {
    const res = await this.client.get('/posts');
    return res.data;
  }

  async createPost(data) {
    const res = await this.client.post('/posts', data);
    return res.data;
  }

  async updatePost(id, data) {
    const res = await this.client.put(`/posts/${id}`, data);
    return res.data;
  }

  async deletePost(id) {
    const res = await this.client.delete(`/posts/${id}`);
    return res.data;
  }
}
