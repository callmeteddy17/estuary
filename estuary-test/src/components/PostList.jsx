import React, { useEffect, useState } from 'react';

import PostItem from './PostItem';
import { fetchPosts, createPost } from '../api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };
    loadPosts();
  }, []);

  const handleAddPost = async () => {
    const newPost = { title: newPostTitle };
    const addedPost = await createPost(newPost);
    setPosts([...posts, addedPost]);
    setNewPostTitle('');
  };

  return (
    <div>
      <h1>Posts</h1>
      <input
        type="text"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
        placeholder="New post title"
      />
      <button onClick={handleAddPost}>Add Post</button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          marginTop: '5px',
        }}>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            setPosts={setPosts}
            posts={posts}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
