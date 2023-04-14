import React, { useState, useEffect } from "react";
import fetchData from "../api/fetchData";

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchData();
      setData(response);
    };
    loadData();
  }, []);

  return (
    <ul>
      {data.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default DataList;
