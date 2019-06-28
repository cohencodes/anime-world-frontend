import React from 'react';
import CommentForm from '../CommentForm/CommentForm';
import './Forum.css';

const Forum = props => {
  const { title } = props;
  return (
    <section className="forum_container">
      <CommentForm title={title} />
    </section>
  );
};

export default Forum;
