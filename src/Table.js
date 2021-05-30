import React, { useState } from "react";
import "./dataTable.css";
import Pagination from "./Pagination";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRow = data.slice(indexOfFirstRow, indexOfLastRow);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table className="table_data">
        <tr>
          <th>Bank Name</th>
          <th>Branch</th>
          <th>Bank id</th>
          <th>ifsc</th>
          <th>Address</th>
          <th>Like</th>
        </tr>
        {currentRow.map((row) => {
          return (
            <tr>
              <th className="th_data">{row.bank_name}</th>
              <th className="th_data">{row.branch}</th>
              <th className="th_data">{row.bank_id}</th>
              <th className="th_data">{row.ifsc}</th>
              <th className="th_data">{row.address}</th>
              <th className="th_data">{<FavoriteBorderIcon />}</th>
            </tr>
          );
        })}
      </table>
      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Table;
