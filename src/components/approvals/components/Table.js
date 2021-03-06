import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";

const Table = ({ load }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("https://lq-time-tracking.firebaseio.com/approvals.json")
      .then(function(response) {
        setTableData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [load]);

  const data = Object.values(tableData ? tableData : []);

  const columns = [
    {
      id: "Name",
      Header: "Name",
      accessor: "approver",
      width: 100
    },
    {
      Header: "Date",
      accessor: "date",
      width: 150
    },
    {
      Header: "Approved",
      accessor: "approved",
      width: 90
    },
    {
      Header: "Rejected",
      accessor: "rejected",
      width: 90
    },
    {
      Header: "Hours Worked",
      accessor: "hours_Worked",
      width: 150
    },
    {
      Header: "Original Approvals",
      accessor: "original_Approval",
      width: 150
    },
    {
      Header: "Client",
      accessor: "client"
    }
  ];

  return (
    <ReactTable
      data={data}
      columns={columns}
      pivotBy={["date"]}
      defaultPageSize={7}
      minRows={5}
    />
  );
};

export default Table;
