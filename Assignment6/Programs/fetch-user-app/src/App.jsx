import react, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/users`).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      console.log("error", error);
    }
  });
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4 text-primary fw-bold">
          User Data Table
        </h2>
        <div className="table-responsive shadow-lg rounded">
          <table className="table table-bordered table-hover align-middle text-center">
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((items) => {
                  return (
                    <>
                      <tr>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.contact}</td>
                        <td>{items.email}</td>
                        <td>{items.password}</td>
                        <td>{items.address}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;