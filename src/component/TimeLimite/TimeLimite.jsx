import { useState, useEffect } from "react";
import axios from "axios";
const TimeLimite = () => {
  const [data, setData] = useState(null);
  const apiUrl = "http://localhost:3000/api/data";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <></>;
};

export default TimeLimite;
