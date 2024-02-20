import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function Update() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useNavigate();
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:8001/update/" + id, { name, phone, email })
      .then((res) => {
        navigator("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/">
          <button className="btn btn-primary">Go back</button>
        </Link>
        <form onSubmit={handleSubmit}>
          <h2>UPDATE USERS</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}
