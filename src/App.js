import React, { useState, useEffect } from "react";

function App() {
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/fetch-folder-data") // Replace with your backend API
      .then((res) => res.json())
      .then((data) => setFolders(data));
  }, []);

  const handleFolderClick = (folderId) => {
    // Fetch subfolder or image data
    fetch(`http://localhost:3000/api/fetch-folder-data/${folderId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.type === "images") setImages(data.items);
        else setCurrentFolder(data.items);
      });
  };

  return (
    <div>
      <h1>Kavkav Shoe Catalog</h1>
      {!currentFolder ? (
        <div>
          {folders.map((folder) => (
            <button key={folder.id} onClick={() => handleFolderClick(folder.id)}>
              {folder.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.url} alt={image.name} style={{ width: "100px" }} />
              <p>{image.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
