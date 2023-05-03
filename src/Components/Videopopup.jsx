import React, { useState } from "react";

const VideoPopup = ({ src }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <button onClick={() => setShowVideo(true)}>Open Video</button>
      {showVideo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            zIndex: 999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            src="https://www.youtube.com/watch?v=kbDRv37-Yy4"
            style={{
              width: "100vw",
              maxWidth: "800px",
            }}
            autoPlay
            controls
          />
          <button
            style={{
              position: "absolute",
              top: 20,
              right: 20,
            }}
            onClick={() => setShowVideo(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
