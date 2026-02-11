import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [12000, 19000, 3000, 5000, 20000, 15000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",  // Jan
          "rgba(54, 162, 235, 0.8)",  // Feb
          "rgba(255, 206, 86, 0.8)",  // Mar
          "rgba(75, 192, 192, 0.8)",  // Apr
          "rgba(153, 102, 255, 0.8)", // May
          "rgba(255, 159, 64, 0.8)",  // Jun
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Dashboard",
      },
    },
  };

  return (
    <>
 <div style={{ width: "70%", margin: "auto", marginTop: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Dashboard</h2>
      <Bar data={data} options={options} />
    </div>
    <div>
      <h1>Hello</h1>
    </div>
    </>
   
  );
};

export default Dashboard;
