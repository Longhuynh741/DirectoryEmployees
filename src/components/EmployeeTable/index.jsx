import React, { useState, useEffect } from "react";
import API from "./API";

const EmployeeTable = () => {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    API.searchUsers("")
      .then((response) => {
        // console.log(response.data);
        setSearch(response.data.results);
        console.log(search);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  // function handleSearch(e) {
  //   // e.preventDefault();
  //   API.searchUsers(e)
  //     .then((response) => {
  //       console.log(response.data.results);
  //       setSearch(response.data.results);
  //     })
  //     .catch((err) => {
  //       if (err) throw err;
  //     });
  // }

  return (
    <>
      {/* <input
        className="form-control nav-search text-center"
        id="plantSearchBar"
        type="text"
        placeholder="Search For An Employee"
        name="search"
        onChange={(e) => handleSearch(e.target.value)}
      /> */}
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Cellphone #</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {search.map((type) => {
            return (
              <tr>
                <th scope="row">{type.cell}</th>
                <td>{type.name.first}</td>
                <td>{type.name.last}</td>
                <td>{type.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeTable;
