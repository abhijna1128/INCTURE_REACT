import React, { useState, useEffect } from "react";

const Upload = ({ files, setFiles, maxFiles = 5, accept = ".pdf" }) => {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    setPreviews(files.map((file) => file.name));
  }, [files]);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (files.length + selectedFiles.length > maxFiles) {
      alert(`Max ${maxFiles} files allowed`);
      return;
    }
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <input type="file" accept={accept} multiple onChange={handleChange} />
      <ul>
        {previews.map((name, i) => (
          <li key={i}>
            {name} <button type="button" onClick={() => removeFile(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Upload;
