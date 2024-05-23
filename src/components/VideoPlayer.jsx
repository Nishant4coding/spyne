import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ videoUrl, captions }) {
  const playerRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState("");

  const handlePlay = () => {
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      if (player && player.playVideo) {
        player.playVideo(); // For YouTube
      } else if (player && player.play) {
        player.play(); // For other video types
      }
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      if (player && player.pauseVideo) {
        player.pauseVideo(); // For YouTube
      } else if (player && player.pause) {
        player.pause(); // For other video types
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const activeCaption = captions.find(
          (caption) =>
            currentTime >= caption.time && currentTime < caption.time + 5
        ); // Display each caption for 5 seconds
        setCurrentCaption(activeCaption ? activeCaption.text : "");
        // console.log(playerRef)
      }
    }, 100);

    return () => clearInterval(interval);
  }, [captions]);

  return (
    <div className="w-auto ">
      <div className="relative w-full">
        <ReactPlayer
          className=" top-0 left-0 lg:w-full w-auto "
          ref={playerRef}
          url={videoUrl}
          controls={true}
          width=""
          
        />

        {currentCaption && (
      
            <div className="absolute top-0 w-full text-center text-lg py-2 bg-black bg-opacity-70 text-white">
              {currentCaption}
            </div>
     
        )}
      </div>
      <div className="flex flex-row justify-center items-center gap-20 mt-10 ">
        <button
          className="px-4 py-2 bg-orange-500 text-white font-bold rounded-md"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="px-4 py-2 bg-orange-500 text-white font-bold rounded-md"
          onClick={handlePause}
        >
          Pause
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
