// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const DoctorList = () => {
//   // State variables
//   const [doctorList, setDoctorList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get("/doctorData.json");
//         console.log("Fetched data:", response.data.doctors);
//         setDoctorList(response.data.doctors);
//       } catch (error) {
//         console.error("Error fetching doctor data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   console.log(Array.isArray(doctorList));

//   return (
//     <>
//       <h3 className="text-center m-5">Select Doctor</h3>
//       <div className="d-flex flex-wrap justify-content-center mt-4">
//         {isLoading ? (
//           <p>Loading doctors...</p>
//         ) : (
//           Array.isArray(doctorList) &&
//           doctorList.map((doctor, index) => (
//             <div key={index} className="card m-3" style={{ width: "14rem" }}>
//               <img
//                 className="card-img-top text-center "
//                 style={{ width: "14rem", height: "12rem" }}
//                 src={doctor?.photoUrl}
//                 alt={doctor?.name}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{doctor?.name}</h5>
//                 <p className="card-text">{doctor?.specialty}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default DoctorList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DoctorList.css"; // Import your CSS file for DoctorList

const DoctorList = () => {
  const [doctorList, setDoctorList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/doctorData.json");
        console.log("Fetched data:", response.data.doctors);
        setDoctorList(response.data.doctors);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h3 className="text-center m-5 custom-text">Select Doctor</h3>
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {isLoading ? (
          <p>Loading doctors...</p>
        ) : (
          Array.isArray(doctorList) &&
          doctorList.map((doctor, index) => (
            <div key={index} className="card m-3 custom-card ">
              <img
                className="card-img-top custom-img"
                style={{ width: "14rem", height: "12rem" }}
                src={doctor?.photoUrl}
                alt={doctor?.name}
              />
              <div className="card-body">
                <h5 className="card-title">{doctor?.name}</h5>
                <p className="card-text">{doctor?.specialty}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default DoctorList;
