import React from 'react';
import '../../index.css';

const YouTubeVideos = props => {
  const { videoResults } = props;
  return (
    <section className="youtube-results">
      <ul className="youtube-ul">
        {videoResults.map(video => {
          return (
            <li key={video.id.videoId} className="video-container">
              <h4>
                {video.snippet.title
                  .split(' ')
                  .splice(0, 4)
                  .join(' ')}
                ...
              </h4>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <a
                href={'http://youtube.com/watch?v=' + video.id.videoId}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default YouTubeVideos;
