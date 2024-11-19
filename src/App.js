import React, { useState } from "react";

function App() {
  const [folders, setFolders] = useState([
    { id: 1, name: "Men's Shoes" },
    { id: 2, name: "Women's Shoes" },
    { id: 3, name: "Kids' Shoes" },
  ]);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [images, setImages] = useState([]);

  const handleFolderClick = (folderId) => {
    // Placeholder data for subfolders or images
    if (folderId === 1) {
      setImages([
        { id: 1, name: "Shoe1", url: "/placeholder-image1.jpg" },
        { id: 2, name: "Shoe2", url: "/placeholder-image2.jpg" },
      ]);
    } else {
      setImages([]); // Clear images if no match
    }
    setCurrentFolder(folderId);
  };

  return (
    <div>
      <h1>Kavkav Shoe Catalog</h1>
      {!currentFolder ? (
        <div>
          {folders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => handleFolderClick(folder.id)}
            >
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
