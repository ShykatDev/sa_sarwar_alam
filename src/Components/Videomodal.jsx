import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Videomodal = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="video-popup">
      <ModalVideo
        className="modal"
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={props.vid ? props.vid : "tRF4SGFNb3c"}
        onClose={() => setOpen(false)}
      />

      <ion-icon
        name="play-circle-outline"
        className="btn-video--popup"
        onClick={() => setOpen(true)}
      ></ion-icon>
    </div>
  );
};

export default Videomodal;
