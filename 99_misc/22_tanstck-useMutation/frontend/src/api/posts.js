import axios from 'axios';

export async function addNewPost(post) {
  await axios.post('http://localhost:3005/posts', post);
}

export async function fetchPosts() {
  const res = await axios.get('http://localhost:3005/posts');
  return res.data;
}

export async function fetchPost(id) {
  const res = await axios.get(`http://localhost:3005/posts/${id}`);
  return res.data;
}
