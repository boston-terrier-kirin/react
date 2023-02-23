import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { addNewPost } from '../api/posts';

const NewPost = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createTaskMutation = useMutation({
    mutationFn: (data) => {
      return addNewPost(data);
    },
    onSettled: (data, error, variables, context) => {
      console.log(data, error, variables, context);
      queryClient.invalidateQueries(['posts']);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createTaskMutation.mutate({
      title,
      description,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-primary">Add new post</button>
      </form>
    </>
  );
};

export default NewPost;
