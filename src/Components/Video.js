import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video w-full lg:w-800 xl:w-1000">
        <iframe
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; autoplay"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            style={{ height: "700px" }}
            
        // className="h-full"
        />
    </div>
)
export default Video