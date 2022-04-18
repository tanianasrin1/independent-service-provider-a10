import React from "react";
import "./VideoBlogs.css";

const VideoBlogs = () => {
  return (
    <div className="container mt-5">
      <h3 className="video-blogs">Travel Video Blogs:</h3>

      <div className="Blogs mt-3 ">
        <div className="blog1 m-2 p-3">
            <span className="mt-2">Video blogs:</span>
            <p className="text-center mt-5"><small>Researching WordPress travel blogs is certainly an interesting and important first step when creating  travel site</small></p>
        </div>
        <div className="blog2 m-2 p-3">
            <span className="mt-2">Video blogs:</span>
            <p className="text-center mt-5"><small>Take the visuals and features that inspire you from the current plow forward  travel blogs out there</small></p>
        </div>
        <div className="blog3 m-2 p-3">
            <span className="mt-2">Video blogs:</span>
            <p className="text-center mt-5"><small>Video is a valuable form of content for social media.  creating quality videos is usually a long process</small></p>
        </div>
        
      </div>
    </div>
  );
};

export default VideoBlogs;
