import React, { useState } from 'react';
import { deletePost, updatePost } from '../api';
import CommentList from './CommentList';

const PostItem = ({ post, setPosts, posts }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(post.title);

  const handleDelete = async () => {
    await deletePost(post.id);
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const handleUpdate = async () => {
    const updatedPost = { ...post, title };
    await updatePost(post.id, updatedPost);
    setEditing(false);
    setPosts(posts.map((p) => (p.id === post.id ? updatedPost : p)));
  };

  return (
    <div style={{ padding: '20px', border: '3px solid black' }}>
      {editing ? (
        <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div style={{ display: 'flex' }}>
          <h3 style={{ width: '195px' }}>{post.title}</h3>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      <CommentList postId={post.id} />
    </div>
  );
};

export default PostItem;
