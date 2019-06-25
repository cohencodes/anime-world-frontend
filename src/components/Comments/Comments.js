import React from 'react';

const Comments = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <li key={index}>
        <p>{comment.user_name}</p>
        <p>{comment.comment}</p>
        <p>{comment.date_created}</p>
      </li>
    );
  });
};

export default Comments;
