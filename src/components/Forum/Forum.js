import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ForumApiService from '../../services/forum-api-service';
import TokenService from '../../services/token-service';
import axios from 'axios';
import config from '../../config';
import './Forum.css';

class Forum extends Component {
  state = {
    comments: [],
    isFetching: false,
    authenticatedComments: [],
    isAuthenticated: false
  };

  componentDidMount = () => {
    this.handleGetComments();
    this.timer = setInterval(() => this.handleGetComments(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
    this.timer = null;
  };

  // TODO: authenticate user comments for forum

  // authenticateUser = comments => {
  //   const authToken = TokenService.getAuthToken();
  //   const decoded = jwtDecode(authToken);
  //   let authenticatedComments = comments.filter(comment => {
  //     if (comment.user_name === decoded.sub) {
  //       return comment;
  //     }
  //   });

  //   this.setState({ authenticatedComments, isAuthenticated: true });
  // };

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
        <li key={index}>
          <FontAwesomeIcon icon="comment" color="#ab24a1" size="lg" />
          <p>{comment.user_name}</p>
          <p className="comment">{comment.comment}</p>
          <p>{comment.date_created.slice(0, 7)}</p>
          <div>
            <button onClick={() => this.handleEditComment(comment.id)}>
              {' '}
              <FontAwesomeIcon icon="edit" color="#ffffff" size="sm" />{' '}
            </button>
            <button onClick={() => this.handleDeleteComment(comment.id)}>
              {' '}
              <FontAwesomeIcon icon="trash-alt" color="#ffffff" size="sm" />
            </button>
          </div>
        </li>
      );
    });
    return (
      <section className="forum_container">
        <h1>Comments</h1>
        <ul>{commentList}</ul>
      </section>
    );
  }
}

export default Forum;
