import axios from 'axios';

export async function getPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
}

export async function getPost(id) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.data;
}

export async function getUser(userId) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return res.data;
}
