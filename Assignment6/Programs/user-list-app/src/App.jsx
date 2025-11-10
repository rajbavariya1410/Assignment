import { useState } from "react";
import "./App.css";


function App() {
  const User = [
    {
      id: 1,
      Name: "Amit Rathod",
      Email: "amit@gmail.com",
    },
    {
      id: 2,
      Name: "Raj Bavariya",
      Email: "raj@gmail.com",
    },
    {
      id: 3,
      Name: "Vijay Karumur",
      Email: "vijay@gmail.com",
    },
    {
      id: 4,
      Name: "Avtar Galchar",
      Email: "avtar@gmail.com",
    },
    {
      id: 5,
      Name: "Alpesh Sankaliya",
      Email: "alpesh@gmail.com",
    }
  ];

  return(
    <>
        <div className="Content p-5 w-75 mx-auto my-5 rounded-3 border border-2 ">
            <div className="Head text-center ">
              <h1>User Table</h1>
            </div>
            <hr className=" w-25 mx-auto"/>
            <div className="UserList">
                <table className="table table-hover">
                  <thead>
                    <tr className="text-white">
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {User.map((Users)=>{
                        return(
                          <>
                            <tr key={Users.id}>
                                <td>{Users.id}</td>
                                <td>{Users.Name}</td>
                                <td>{Users.Email}</td>
                            </tr>
                          </>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
}

export default App;