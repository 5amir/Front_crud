import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Image() {
  const [file, setFile] = useState();
  const [data, setData] = useState([]);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8001")
      .then((res) => {
        setData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append("image", file);
    axios
      .post("http://localhost:8001/upload", formdata)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Successed");
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="mt-4" style={{ width: "400px", margin: "20px" }}>
        <Link to="/">
          <button className="btn btn-success mb-3 ">Home</button>
        </Link>
        <input className="form-control" type="file" onChange={handleFile} />
        <button className="btn btn-primary" onClick={handleUpload}>
          Upload
        </button>
        <br />
        <img src={"http://localhost:8001/images/" + data.image} alt="" />
      </div>
    </div>
  );
}
