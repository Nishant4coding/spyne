import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import CaptionInput from './CaptionInput';

function Main() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  return (
    <div className=" bg-gray-100">
      <div className="container mx-auto p-6">

        <div className="mb-6">
          <input
            type="text"
            className="w-full mt-20 p-3 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-center font-bold"
            placeholder="Enter video URL here"
            value={videoUrl}
            onChange={(e) => {setVideoUrl(e.target.value); setCaptions([]);}}
            //caption become null when new url enter
          />
        </div>
        {videoUrl && (
          <div className="flex flex-col lg:flex-row gap-10">
         
          <div className="w-full lg:w-1/2">
            <VideoPlayer videoUrl={videoUrl} captions={captions} />
          </div>
          <div className="w-full lg:w-1/2">
            <CaptionInput captions={captions} setCaptions={setCaptions} />
          </div>
        </div>
        
        )}
      </div>
    </div>
  );
}

export default Main;
