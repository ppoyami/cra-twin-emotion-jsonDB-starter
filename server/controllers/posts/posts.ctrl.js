const { v4 } = require('uuid');
const { readDB, writeDB } = require('../../models');

const getPosts = () => readDB('posts');
const setPosts = data => writeDB('posts', data);

exports.create_posts = (req, res) => {
  try {
    const { title, desc } = req.body;
    const newPost = {
      id: v4(),
      title,
      desc,
    };
    const posts = getPosts();
    posts.unshift(newPost);
    setPosts(posts);
    res.send(posts);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

exports.update_post = (req, res) => {
  try {
    const {
      params: { id },
      body: { title, desc },
    } = req;

    const posts = getPosts();
    const targetIdx = posts.findIndex(post => post.id === id);

    posts[targetIdx].title = title;
    posts[targetIdx].desc = desc;

    setPosts(posts);
    res.send(posts);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

exports.get_posts = (req, res) => {
  try {
    const posts = getPosts();
    res.send(posts);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

exports.delete_post = (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const posts = getPosts();
    const targetIdx = posts.findIndex(post => post.id === id);
    posts.splice(targetIdx, 1);
    setPosts(posts);
    res.send(posts);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};
