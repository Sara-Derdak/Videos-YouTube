import React, { useState, useEffect } from 'react';
import { fetchVideos } from './youtubeAPI';
import VideoList from './VideoList';
import './App.css';
import Header, { Footer } from './Header';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('React tutorials');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
    
  const loadVideos = async (searchQuery) => {
    setLoading(true);
    try {
      const fetchedVideos = await fetchVideos(searchQuery);
      setVideos(fetchedVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page refresh
    loadVideos(query); // Trigger video search
  };

  useEffect(() => {
    loadVideos(query); // Initial load with default query
  }, []);

  return (
    <div className={`container app `}>
      {/* Pass props to Header */}
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />

      {loading ? (
        <p>Loading videos...</p>
      ) : videos.length === 0 ? (
        <p>No videos found. Try a different search.</p>
      ) : (
        <VideoList
          videos={videos}
          onVideoSelect={(video) => setSelectedVideo(video)} // Update selected video
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

      <Footer />
    </div>
  );
};

export default App;
