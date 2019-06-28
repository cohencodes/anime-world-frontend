import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ForumApiService from '../../services/forum-api-service';
import TokenService from '../../services/token-service';
import axios from 'axios';
import config from '../../config';
import './Comments.css';

class Comments extends Component {
  state = {
    comments: [],
    isFetching: false
  };

  componentDidMount = () => {
    this.handleGetComments();
    this.timer = setInterval(() => this.handleGetComments(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
    this.timer = null;
  };

  handleGetComments = () => {
    const { title } = this.props;
    axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/forum/${title}`,
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
      .then(res => {
        this.setState({ comments: res.data });
      })
      .catch(error => error.response.data.errors);
  };

  handleDeleteComment = async id => {
    await ForumApiService.deleteComment(id);
  };

  handleEditComment = (id, newComment) => {
    // TODO: add input button to comment component
    // TODO: functionality for editing comments
    console.log('edit comment', id, newComment);
  };

  render() {
    const { comments } = this.state;
    const commentList = comments.map((comment, index) => {
      return (
        <li key={index} className="comment_container">
          <FontAwesomeIcon icon="comment" color="#ab24a1" size="lg" />
          <p>{comment.user_name}</p>
          <p className="comment">{comment.comment}</p>
          <p>{comment.date_created.slice(0, 7)}</p>
          <button onClick={() => this.handleEditComment(comment.id)}>
            {' '}
            <FontAwesomeIcon icon="edit" color="#ffffff" size="sm" />{' '}
          </button>
          <button onClick={() => this.handleDeleteComment(comment.id)}>
            {' '}
            <FontAwesomeIcon icon="trash-alt" color="#ffffff" size="sm" />
          </button>
        </li>
      );
    });
    return (
      <section className="comment_container">
        <h1>Comments</h1>
        <ul>{commentList}</ul>
      </section>
    );
  }
}

export default Comments;
