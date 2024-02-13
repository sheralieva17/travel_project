import React from "react";
import "./VideoBlock.css";
import beachVideo from "../../assets/video3.mp4";
import { useNavigate } from "react-router-dom";

const VideoBlock = () => {
  const navigate = useNavigate()
  return (
    <div className="my-video">
      <div className="video-block">
        <video autoPlay loop muted className="beach-video">
          <source src={beachVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          <div className="left-title">
            <h2>
              Take The <br /> Best Place
            </h2>
          </div>
          <div className="text">
            <p>
              Plan a perfect getaway in a place where the sun shines all year.
              Explore pristine beaches, enjoy relaxed activities, and pamper
              yourself at the many wellness retreats.
            </p>
            <button onClick={() => navigate("/discover")} className="btn-see">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBlock;