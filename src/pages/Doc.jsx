import React from 'react';

function Doc() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <div className="container mx-auto bg-white p-8 rounded-md shadow-md mt-20">
        <h1 className="lg:text-4xl text-3xl font-bold mb-8 text-center">Spyne Captions Documentation</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Overview</h2>
          <p>
            This project allows users to add captions to a video by specifying the text and the timestamp. The application displays the captions in sync with the video playback. Users can also validate the video URL before proceeding to add captions.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Components</h2>
          <ul className="list-disc ml-6">
            <li><strong>Navbar:</strong> A simple navigation bar that displays the title of the application.</li>
            <li><strong>Main:</strong> The main component that handles the state for video URL and captions, and integrates other components.</li>
            <li><strong>CaptionInput:</strong> A component for inputting caption text and timestamp, and displaying the list of added captions with edit and delete functionalities.</li>
            <li><strong>VideoPlayer:</strong> A component that uses `ReactPlayer` to play the video and display captions at specified timestamps.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">State Management</h2>
          <ul className="list-disc ml-6">
            <li><strong>videoUrl:</strong> Stores the URL of the video to be played.</li>
            <li><strong>captions:</strong> Stores the list of captions, each with text and timestamp.</li>
            <li><strong>error:</strong> Stores error messages for invalid URLs.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">URL Validation</h2>
          <p>
            The application validates the video URL to ensure it is in the correct format before allowing users to add captions. An error message is displayed if the URL is invalid.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Usage</h2>
          <ol className="list-decimal ml-6">
            <li>Enter a valid video URL in the input field.</li>
            <li>Add captions by specifying the text and timestamp.</li>
            <li>View the video with the captions displayed at the specified times.</li>
          </ol>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-2">Dependencies</h2>
          <ul className="list-disc ml-6">
            <li>React</li>
            <li>ReactPlayer</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Doc;
