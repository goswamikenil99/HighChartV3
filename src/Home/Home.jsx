// Home.js
import { Link } from "react-router-dom"; 
import { chartData } from "../HighChart_Data/Sample";
import "./style.css";

const Home = () => {
  // console.log(chartData.heatmapChart)
  return (
    <div className="container">
      <h1>Choose a Chart Type</h1>
      <div className="button-container">
        <Link to="/chart" state={chartData.lineChart}>
          <button className="button">Line Chart</button>
        </Link>
        <Link to="/chart" state={chartData.pieChart}>
          <button className="button">Pie Chart</button>
        </Link>
        <Link to="/chart" state={chartData.columnChart}>
          <button className="button">column Chart</button>
        </Link>
        <Link to="/chart" state={chartData.scatterPlot}>
          <button className="button">scatterPlot Chart</button>
        </Link>
        <Link to="/chart" state={chartData.areaChart}>
          <button className="button">area Chart</button>
        </Link>
        <Link to="/chart" state={chartData.stackedColumnChart}>
          <button className="button">stackedColumn Chart</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
