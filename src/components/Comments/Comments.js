import React from 'react';

const Comments = ({ comments, edit, remove }) => {
  return comments.map((comment, index) => {
    console.log(comment);
    return (
      <li key={index}>
        <p>{comment.user_name}</p>
        <p>{comment.comment}</p>
        <p>{comment.date_created.slice(0, 7)}</p>
        <button onClick={() => edit(comment.id)}>Edit</button>
        <button onClick={() => remove(comment.id)}>Delete</button>
      </li>
    );
  });
};

export default Comments;
