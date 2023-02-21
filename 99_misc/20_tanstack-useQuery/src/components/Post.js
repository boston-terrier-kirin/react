import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, getUser } from '../api/postApi';

const Post = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const postQuery = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
    staleTime: 3000,
  });

  const userQuery = useQuery({
    queryKey: ['users', postQuery?.data?.userId],
    enabled: postQuery?.data?.userId != null, // postQueryが終わったら有効になる。
    queryFn: () => getUser(postQuery?.data?.userId),
    staleTime: 3000,
  });

  console.log('postQuery', postQuery.data);
  console.log('userQuery', userQuery.data);

  if (postQuery.isLoading) {
    return <h1>Loading</h1>;
  }

  if (postQuery.isError) {
    return <p>{JSON.stringify(postQuery.error)}</p>;
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Back</button>
      <h1>{postQuery.data.title}</h1>
      {userQuery.isLoading ? (
        <h3>User is loading</h3>
      ) : (
        <h3>
          {userQuery.data.name} / <span>{userQuery.data.email}</span>
        </h3>
      )}
      <p>{postQuery.data.body}</p>
    </div>
  );
};

export default Post;
