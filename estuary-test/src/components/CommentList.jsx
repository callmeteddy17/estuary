import React, { useEffect, useState } from 'react';
import { fetchComments, createComment } from '../api';
import CommentItem from './CommentItem';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    const loadComments = async () => {
      const comments = await fetchComments(postId);
      setComments(comments);
    };
    loadComments();
  }, [postId]);

  const handleAddComment = async () => {
    const newComment = { text: newCommentText };
    const addedComment = await createComment(postId, newComment);
    setComments([...comments, addedComment]);
    setNewCommentText('');
  };

  return (
    <div>
      <h4>Comments</h4>
      <input
        type="text"
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}
        placeholder="New comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          marginTop: '5px',
        }}>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            setComments={setComments}
            comments={comments}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
