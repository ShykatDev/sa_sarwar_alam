import React, { useState, useEffect } from "react";
import { SingleP } from "../Components";
import { client } from "../client";
import { motion } from "framer-motion";
import { FcCamera } from "react-icons/fc";

const AllPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [prompt, setPrompt] = useState(false);
  const [prImg, setPrImg] = useState("");
  const [prCaption, setPrCaption] = useState("");

  useEffect(() => {
    client.fetch(`*[_type == "allphotos"]`).then((res) => setPhotos(res));
  }, []);

  console.log(photos);
  return (
    <div className="allPhotos">
      <div className="container">
        <h1>
          All Photos <span>.</span>
        </h1>

        <div className="all--photos">
          <small>
            Single Photoshot
            <FcCamera className="littleIO" />
          </small>
          {photos
            .filter((photo) => photo.id === 1)
            .map((pt, ind) => (
              <SingleP
                key={`pt${ind}@#23${ind}`}
                item={pt}
                setPrImg={setPrImg}
                prompt={prompt}
                setPrompt={setPrompt}
                setPrCaption={setPrCaption}
              />
            ))}
        </div>

        <div className="all--photos">
          <small>
            Roaming around the world
            <FcCamera className="littleIO" />
          </small>
          {photos
            .filter((photo) => photo.id === 2)
            .map((pt, ind) => (
              <SingleP
                key={`pt${ind}@#23${ind}`}
                item={pt}
                setPrImg={setPrImg}
                prompt={prompt}
                setPrompt={setPrompt}
                setPrCaption={setPrCaption}
              />
            ))}
        </div>

        <div className="all--photos">
          <small>
            Professional Life
            <FcCamera className="littleIO" />
          </small>
          {photos
            .filter((photo) => photo.id === 3)
            .map((pt, ind) => (
              <SingleP
                key={`pt${ind}@#23${ind}`}
                item={pt}
                setPrImg={setPrImg}
                prompt={prompt}
                setPrompt={setPrompt}
                setPrCaption={setPrCaption}
              />
            ))}
        </div>
        <div className="all--photos">
          <small>
            Personal Old
            <FcCamera className="littleIO" />
          </small>
          {photos
            .filter((photo) => photo.id === 4)
            .map((pt, ind) => (
              <SingleP
                key={`pt${ind}@#23${ind}`}
                item={pt}
                setPrImg={setPrImg}
                prompt={prompt}
                setPrompt={setPrompt}
                setPrCaption={setPrCaption}
              />
            ))}
        </div>
        <div className="all--photos">
          <small>
            Outdoor Images
            <FcCamera className="littleIO" />
          </small>
          {photos
            .filter((photo) => photo.id === 5)
            .map((pt, ind) => (
              <SingleP
                key={`pt${ind}@#23${ind}`}
                item={pt}
                setPrImg={setPrImg}
                prompt={prompt}
                setPrompt={setPrompt}
                setPrCaption={setPrCaption}
              />
            ))}
        </div>
        <div className="all--photos">
          <small>
            Newspaper Interview
            <FcCamera className="littleIO" />
          </small>
          {photos
            .filter((photo) => photo.id === 6)
            .map((pt, ind) => (
              <SingleP
                key={`pt${ind}@#23${ind}`}
                item={pt}
                setPrImg={setPrImg}
                prompt={prompt}
                setPrompt={setPrompt}
                setPrCaption={setPrCaption}
              />
            ))}
        </div>
        <div className="all--photos">
          <small>
            Family Life
            <FcCamera className="littleIO" />
          </small>
          {photos
            .filter((photo) => photo.id === 7)
            .map((pt, ind) => (
              <SingleP
                key={`pt${ind}@#23${ind}`}
                item={pt}
                setPrImg={setPrImg}
                prompt={prompt}
                setPrompt={setPrompt}
                setPrCaption={setPrCaption}
              />
            ))}
        </div>
        <div className="all--photos">
          <small>
            With DMP
            <FcCamera className="littleIO" />
          </small>
          {photos
            .filter((photo) => photo.id === 8)
            .map((pt, ind) => (
              <SingleP
                key={`pt${ind}@#23${ind}`}
                item={pt}
                setPrImg={setPrImg}
                prompt={prompt}
                setPrompt={setPrompt}
                setPrCaption={setPrCaption}
              />
            ))}
        </div>
        {prompt && (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
            className="singleImgPrompt"
          >
            <span className="closePrompt" onClick={() => setPrompt(false)}>
              {" "}
              &#9587;
            </span>

            <motion.img
              className="promptImg"
              whileInView={{ y: [50, 0] }}
              src={prImg}
              alt=""
            />

            <p>{prCaption}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AllPhotos;
