import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './YouTubeVideos.css';

const YouTubeVideos = props => {
  const { videoResults } = props;
  return (
    <>
      <h1>YouTube Videos</h1>
      <ul className="youtube_ul">
        {videoResults.map(video => {
          return (
            <li key={video.id.videoId} className="video-container">
              <p>
                {video.snippet.title
                  .split(' ')
                  .splice(0, 4)
                  .join(' ')}
                ...
              </p>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="youtube_img"
              />
              <button>
                <a
                  href={'http://youtube.com/watch?v=' + video.id.videoId}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <FontAwesomeIcon icon="play-circle" color="#6DB65B" size="3x" />{' '} */}
                  Watch
                </a>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default YouTubeVideos;
