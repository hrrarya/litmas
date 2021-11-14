import React, { useState } from "react";
const AddStory = () => {
  const [files, setFiles] = useState([]);
  const fileObj = [];
  const fileArray = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // here ajax call server request to save the photos
  };
  const handleFiles = (e) => {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setFiles(fileArray);
  };
  return (
    <div className="add_story_section">
      <h1 className="text-3xl mb-4 text-center border-b py-1">Add Story</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="stories"
            id="stories"
            multiple
            onChange={handleFiles}
          />
          <input
            type="submit"
            value="Submit"
            className="bg-blue-700 hover:bg-blue-500 px-2 py-1 mt-4 rounded block"
          />
        </form>
        <div className="flex flex-wrap mt-4">
          {files.map((url, index) => (
            <img key={index} src={url} alt="" className="w-1/3 px-2" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddStory;
