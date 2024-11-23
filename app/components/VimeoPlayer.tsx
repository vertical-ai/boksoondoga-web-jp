'use client';

import React from 'react';

const VimeoPlayer = ({videoId}: { videoId: string }) => (
  <div className="video-container">
    <iframe
      src={`https://player.vimeo.com/video/${videoId}`}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
    <style jsx>{`
        .video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
            height: 0;
            overflow: hidden;
            max-width: 100%;
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    `}</style>
  </div>
);

export default VimeoPlayer;