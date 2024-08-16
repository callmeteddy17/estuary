const simulateDelay = () => {
  return new Promise((resolve) => {
    const delay = Math.random() * (1000 - 200) + 200;
    setTimeout(resolve, delay);
  });
};

const getData = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const fetchPosts = async () => {
  await simulateDelay();
  return getData('posts');
};

export const createPost = async (newPost) => {
  await simulateDelay();
  const posts = getData('posts');
  newPost.id = Date.now();
  posts.push(newPost);
  saveData('posts', posts);
  return newPost;
};

export const deletePost = async (id) => {
  await simulateDelay();
  let posts = getData('posts');
  posts = posts.filter((post) => post.id !== id);
  saveData('posts', posts);
};

export const updatePost = async (id, updatedPost) => {
  await simulateDelay();
  let posts = getData('posts');
  posts = posts.map((post) => (post.id === id ? updatedPost : post));
  saveData('posts', posts);
  return updatedPost;
};

export const fetchComments = async (postId) => {
  await simulateDelay();
  const comments = getData('comments');
  return comments.filter((comment) => comment.postId === postId);
};

export const createComment = async (postId, newComment) => {
  await simulateDelay();
  const comments = getData('comments');
  newComment.id = Date.now();
  newComment.postId = postId;
  comments.push(newComment);
  saveData('comments', comments);
  return newComment;
};

export const deleteComment = async (id) => {
  await simulateDelay();
  let comments = getData('comments');
  comments = comments.filter((comment) => comment.id !== id);
  saveData('comments', comments);
};

export const updateComment = async (id, updatedComment) => {
  await simulateDelay();
  let comments = getData('comments');
  comments = comments.map((comment) =>
    comment.id === id ? updatedComment : comment
  );
  saveData('comments', comments);
  return updatedComment;
};
