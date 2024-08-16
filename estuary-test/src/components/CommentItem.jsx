import React, { useState } from 'react';
import { deleteComment, updateComment } from '../api';

const CommentItem = ({ comment, setComments, comments }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.text);

  const handleDelete = async () => {
    await deleteComment(comment.id);
    setComments(comments.filter((c) => c.id !== comment.id));
  };

  const handleUpdate = async () => {
    const updatedComment = { ...comment, text };
    await updateComment(comment.id, updatedComment);
    setEditing(false);
    setComments(
      comments.map((c) => (c.id === comment.id ? updatedComment : c))
    );
  };

  return (
    <div>
      {editing ? (
        <div>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div style={{ display: 'flex' }}>
          <p style={{ width: '195px' }}>{comment.text}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
