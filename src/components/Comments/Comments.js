import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Comments.css';

const Comments = ({ comments, edit, remove }) => {
  return comments.map((comment, index) => {
    return (
      <li key={index} className="comment_container">
        <FontAwesomeIcon icon="comment" color="#ab24a1" size="lg" />
        <p>{comment.user_name}</p>
        <p className="comment">{comment.comment}</p>
        <p>{comment.date_created.slice(0, 7)}</p>
        <button onClick={() => edit(comment.id)}>Edit</button>
        <button onClick={() => remove(comment.id)}>Delete</button>
      </li>
    );
  });
};

export default Comments;
