import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";

const Table = ({ load }) => {
  const [tableData, setTableData] = useState([]);

  const getColumnWidth = (data, accessor, headerText) => {
    if (typeof accessor === "string" || accessor instanceof String) {
      accessor = d => d[accessor]; // eslint-disable-line no-param-reassign
    }
    const maxWidth = 600;
    const magicSpacing = 25;
    const cellLength = Math.max(
      ...data.map(row => (`${accessor(row)}` || "").length),
      headerText.length
    );
    return Math.min(maxWidth, cellLength * magicSpacing);
  };

  useEffect(() => {
    axios
      .get("https://lq-time-tracking.firebaseio.com/user.json")
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
      accessor: "name",
      width: getColumnWidth(data, "accessor", "My header")
    },
    {
      Header: "Date",
      accessor: "date",
      width: getColumnWidth(data, "accessor", "My header")
    },
    {
      Header: "Comment",
      accessor: "comment"
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
