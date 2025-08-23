import React, { useState } from "react";
import axios from "axios";

const GetApi1 = () => {
  let [userList, setUserList] = useState([]);
  let [loading, setLoading] = useState(false); 
  let [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const apiResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserList(apiResponse.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>GET User List</h2>
      <button className="btn btn-success" onClick={getUsers} disabled={loading}>
        {loading ? "Loading..." : "GET Users"}
      </button>

      <div className="row">
        <div className="col">
          {loading && <p>Loading users...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <ul>
            {!loading && userList.length > 0 ? (
              userList.map((item) => {
                return (
                  <li key={item.id}>
                    <strong>{item.name}</strong> <br />
                    📧 {item.email} <br />
                    📍 {item.address.street}, {item.address.city},{" "}
                    {item.address.zipcode}
                  </li> 
                );
              })
            ) : (
              !loading && <h2>Click to Load users</h2>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetApi1;
