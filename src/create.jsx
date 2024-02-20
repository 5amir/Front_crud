import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Create() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8001/create", { name, phone, email })
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
          <h2>ADD USERS</h2>
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
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
