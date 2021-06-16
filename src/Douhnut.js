// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Doughnut } from "react-chartjs-2";
// import axios from "axios";

// const DoughnutChart = () => {
//     const [deviationData,setDeviationData] = useState({});

//     const chart = () => {
//         let Deviation = [];
//         axios
//         .get("http://localhost:8900/deviation")
//         .then(res => {
//           console.log(res);
//           for (const dataObj of res.data) {
//             Deviation.push(parseInt(dataObj.Deviation));
//         }
//         setDeviationData({
//         labels: [ 'Appointment Mismatch',
//                   'Duration Mismatch',
//                   'NotBilled'
//                 ],
//             datasets: [
//               {
//                 label: "level of thiccness",
//                 data: Deviation,
//                 backgroundColor: ["rgb(255, 0, 0)","rgb(255, 100, 71)","rgb(255,165,0)"],
//                 borderWidth: 4
//               }
//             ]
//           });
//         })
//         .catch(err => {
//             console.log(err);
//           });
//         console.log(Deviation);
//     };
//     useEffect(() => {
//         chart();
//       }, []);
//       return (
//         <div className="App">
//           <h1>Dankmemes</h1>
//           <div>
//             <Doughnut
//               data={deviationData}
//               options={{
//                 responsive: true,
//                 title: { text: "THICCNESS SCALE", display: true },
//                 onClick: (evt, item) => {
             
            
//                   console.log(item[0])
//                   item[0]._model.outerRadius += 10;
//                   window.location.replace ("https://www.youtube.com/watch?v=lvQq0uouZTY")
//               }  
//               }}
//             />
//           </div>
//         </div>
//       );
// }

// ReactDOM.render(<DoughnutChart/>,document.getElementById('root'))