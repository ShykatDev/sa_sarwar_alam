import React, { useState, useEffect } from "react";
import { SingleV } from "../Components";
import { client } from "../client";

const AllVideos = () => {
  const [videoItem, setVideoItem] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "allvideos"]`).then((res) => setVideoItem(res));
  }, []);

  return (
    <div>
      <div className="container allVideos">
        <h1>
          All Videos <span>.</span>
        </h1>
        <div className="all--videos">
          {videoItem.map((videoItem, ind) => (
            <SingleV key={ind} item={videoItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllVideos;
