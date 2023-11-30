// import React, { useState, useEffect } from "react";

// function FetchData({ setData: parentSetData }) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetchData();
//   }, []); // Only run this effect once, when the component mounts

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3001/getspecific?" +
//           new URLSearchParams({
//             cols: "SchoolNumber, Year, avg(PAdvanced), avg(PProficient), avg(PBasic), avg(PBelowBasic)",
//             table: "PSSAScores",
//             attribute: "SchoolNumber, Year",
//           })
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const result = await response.json();
//       const dataArray = Object.values(result);
//       setData(dataArray);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   // useEffect to notify the parent component when data is available
//   useEffect(() => {
//     if (data) {
//       console.log("data fetched: ", data);
//       console.log("This is a test: ", data[1]);
//       parentSetData(data);
//     }
//   }, [data, parentSetData]);

//   // No need to return anything
//   return null;
// }

// export default FetchData;