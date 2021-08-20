import React, { useState, useEffect } from "react";
import axios from 'axios'

const FetchingApi = (props) => {
  const [userdata, Setuserdata] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        Setuserdata(response.data);
      },
      (errorMsg) => {
        alert("THere is no a error while fetching the api");
      }
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {userdata.length > 0 ? (
            <table className=" table table-hover">
              <thead>
                <tr className="table-dark">
                  <td>ID</td>
                  <td>NAME</td>
                  <td>CITY</td>
                  <td>EMAIL</td>
                </tr>
              </thead>
              <tbody>
                {userdata.map(function (data, index) {
                  return (
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.address.city}</td>
                      <td>{data.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            "THere is no any data"
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchingApi;
