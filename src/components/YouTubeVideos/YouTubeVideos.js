import React from 'react';
import './YouTubeVideos.css';

const YouTubeVideos = props => {
  const { videoResults } = props;
  return (
    <section>
      <h1>YouTube Videos</h1>
      <ul className="youtube_ul">
        {videoResults.length === 0 && (
          <p>Sorry, these aren't available right now :)</p>
        )}
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
                  Watch
                </a>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default YouTubeVideos;
