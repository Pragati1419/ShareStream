import "./App.css";
import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./services/api";

function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();

  const logo = "https://media.istockphoto.com/id/1323868851/vector/document-file-transfer-concept.jpg?s=612x612&w=0&k=20&c=WcnVgnI0W_ZGl4ordBh7lk9IPRFoXxqtDCWlxzvCJtg=";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])


  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="container">
      <img src = {logo} alt = "banner"  />
      <div className="wrapper">
        <h1>ShareStream </h1>
        <h2>File Sharing App !</h2>
        <p>Upload and share the download link 🔗</p>

        <button  onClick={() => onUploadClick()}>Upload</button>
        <input
         type="file"
         ref={fileInputRef}
         style={{ display: "none" }}
         onChange={(e) => setFile(e.target.files[0])}
        />

         <a href={result} target='_blank' rel="noreferrer">{result}</a> 
         
      </div>
    </div>
  );
}

export default App;
