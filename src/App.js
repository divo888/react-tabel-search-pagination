import React, { useState, useEffect } from "react";

import "./App.css";

import Table from "./Table";

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [city]);

  const handleClick = (e) => {
    return setCity(e.target.value);
  };

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) => row[column].toString().toLowerCase().indexOf(q) > -1
      )
    );
  }

  return (
    <div className="App">
      <h1 className="Heading">Bank Branches</h1>
      <div className="banks__search">
        <select onClick={handleClick}>
          <option>MUMBAI</option>;<option>DELHI</option>;
          <option>AHMEDABAD</option>;<option>CHENNAI</option>;
          <option>BANGLORE</option>;
        </select>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for banks here"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div>
        <Table data={search(data)} />
      </div>
    </div>
  );
}
export default App;
