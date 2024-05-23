import React, { useState } from "react";

function CaptionInput({ captions, setCaptions }) {
  const [captionText, setCaptionText] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addCaption = () => {
    if (captionText && timestamp) {
      const newCaption = { text: captionText, time: parseFloat(timestamp) };
      setCaptions([...captions, newCaption]);
      setCaptionText("");
      setTimestamp("");
    }
  };

  const updateCaption = (index) => {
    const updatedCaptions = [...captions];
    updatedCaptions[index].text = editedText;
    setCaptions(updatedCaptions);
    setEditingIndex(null);
    setEditedText("");
  };

  const deleteCaption = (index) => {
    const updatedCaptions = captions.filter((_, i) => i !== index);
    setCaptions(updatedCaptions);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 w-full mx-auto">
      <div className="mb-4">
        <textarea
          className="w-full px-3 py-2 mb-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
          value={captionText}
          onChange={(e) => setCaptionText(e.target.value)}
          placeholder="Enter caption text"
        />
        <input
          className="w-full px-3 py-2 mb-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
          type="number"
          step="0.1"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          placeholder="Enter timestamp (in seconds)"
        />
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-md w-full"
          onClick={addCaption}
        >
          Add Caption
        </button>
      </div>
      <ul className="divide-y divide-gray-300">
        {captions.map((caption, index) => (
          <li key={index} className="py-2 flex flex-row items-center justify-between">
            {editingIndex === index ? (
              <div className="flex w-full">
                <textarea
                  className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />

                <button
                  className="px-1 py-2 ml-2 gap-20 bg-orange-500 text-white rounded-md "
                  onClick={() => updateCaption(index)}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <span className="font-bold">{caption.time}s</span>
                <span className="font-bold">{caption.text}</span>
                <hr />
                </>
              
            )}
            <div className="gap-2 flex lg:flex-row flex-col">
              <button
                className="px-2 py-1 mr-2 ml-2 text-sm bg-gray-200 rounded-md"
                onClick={() => setEditingIndex(index)}
              >
                Edit
              </button>
              <button
                className="px-2 py-1 ml-2 text-sm bg-red-500 text-white rounded-md"
                onClick={() => deleteCaption(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CaptionInput;
