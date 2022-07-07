import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video" style={{ width: "800px", height: "400px" }}>
        <iframe
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            style={{ height: "400px" }}
        // className="h-full"
        />
    </div>
)
export default Video