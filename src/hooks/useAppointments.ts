import React, { useState, useEffect } from "react";
import appointments from "../data/appointments";
export interface Appointment {
  id: number;
  doctor_name: string;
  doctor_image: string;
  hospital_name: string;
  available_time: string;
  phone_number: string;
  distance: string;
  google_map_link: string;
  appointment_website: string;
  comments?: string; // 使用?表示这是一个可选属性
}
// function Appointments() {
//   const [data, setData] = useState<Appointment[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // 替换为您的API地址
//     const apiUrl = "https://raw.githubusercontent.com/yusx-swapp/dh-api/main/data.json";

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []); // 使用空的依赖数组，确保此effect只在组件挂载时运行一次

//   return { data, error, loading };
// }
const Appointments = () => ({ data: appointments, isLoading: false, error: null });



export default Appointments;
