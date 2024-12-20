// import React, { useState, useEffect } from 'react';
// import { fetchVideos } from './youtubeAPI';
// import VideoList from './VideoList';
// import './App.css';
// import { YTvideos } from './ytvideos';
// import Header from './Header.js';

// const App = () => {
//   const [videos, setVideos] = useState([]);
//   const [query, setQuery] = useState('React tutorials');
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const loadVideos = async (searchQuery) => {
//     setLoading(true);
//     const fetchedVideos = await fetchVideos(searchQuery);
//     setVideos(fetchedVideos);
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadVideos(query);
//   }, [query]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     loadVideos(query);
//   };

  
//   return (
//     <div className="container">
//       <Header/>
//       <h1>YouTube Videos</h1>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search videos..."
//         />
//         <button type="submit">Search</button>
//       </form>


//       {loading ? (
//         <p>Loading videos...</p>
//       ) : videos.length === 0 ? (
//         <p>No videos found. Try a different search.</p>
//       ) : (
//         <VideoList
//           videos={videos}
//           onVideoSelect={(video) => setSelectedVideo(video)} // When a video is clicked, update the selected video
//         />
//       )}

//       {selectedVideo && (
//         <div className="modal" onClick={() => setSelectedVideo(null)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <iframe
//               width="560"
//               height="315"
//               src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
//               title={selectedVideo.snippet.title}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <button className="close-btn" onClick={() => setSelectedVideo(null)}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { fetchVideos } from './youtubeAPI';
import VideoList from './VideoList';
import './App.css';
import { YTvideos } from './ytvideos';
import Header, { Footer } from './Header.js'; // Importation du Header

const App = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('React tutorials');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fonction pour charger les vidéos
  const loadVideos = async (searchQuery) => {
    setLoading(true);
    const fetchedVideos = await fetchVideos(searchQuery);
    setVideos(fetchedVideos);
    setLoading(false);
  };

  // UseEffect pour charger les vidéos lorsque la requête change
  useEffect(() => {
    loadVideos(query);
  }, [query]);

  // Fonction de gestion de la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    loadVideos(query);
  };

  return (
    <div className="container">
      {/* Passer les props à Header */}
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
      
      {loading ? (
        <p>Loading videos...</p>
      ) : videos.length === 0 ? (
        <p>No videos found. Try a different search.</p>
      ) : (
        <VideoList
          videos={videos}
          onVideoSelect={(video) => setSelectedVideo(video)} // When a video is clicked, update the selected video
        />
      )}

      {selectedVideo && (
        <div className="modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
              title={selectedVideo.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={() => setSelectedVideo(null)}>
              Close
            </button>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default App;
