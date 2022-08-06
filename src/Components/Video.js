import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video w-full lg:w-600 xl:w-800">
        <iframe
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; autoplay"
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