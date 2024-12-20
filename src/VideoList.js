// import React from 'react';
// const VideoList = ({ videos }) => {
// return (
// <ul>
// {videos.map((video) => (
// <li key={video.id.videoId}>
// <h3>{video.snippet.title}</h3>
// <p>{video.snippet.description}</p>
// <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
// </li>
// ))}
// </ul>
// );
// };
// export default VideoList;

import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id.videoId} onClick={() => onVideoSelect(video)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
