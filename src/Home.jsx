import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8001/delete/" + id)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="bg-white rounded w-50 p-3">
        <h2>My CRUD APP </h2>
        <Link to="/create">
          <button className="btn btn-success">Add +</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>phone</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr>
                <td>{d.name}</td>
                <td>{d.phone}</td>
                <td>{d.email}</td>
                <td>
                  <Link to={`/update/${d.id}`}>
                    <button className="btn btn-sm btn-primary">Update</button>
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="btn btn-sm btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
