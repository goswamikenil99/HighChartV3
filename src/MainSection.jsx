import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {chartData } from "./HighChart_Data/Sample"

const MainSection = () => {
    console.log(chartData);
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {/* Card for Chart */}
    <div className="card shadow-lg bg-white rounded-lg p-4 hover:shadow-2xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Sales Performance</h2>
      <HighchartsReact highcharts={Highcharts} options={chartData.lineChart} />
    </div>
    <div className="card shadow-lg bg-white rounded-lg p-4 hover:shadow-2xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Sales Performance</h2>
      <HighchartsReact highcharts={Highcharts} options={chartData.pieChart} />
    </div>
    <div className="card shadow-lg bg-white rounded-lg p-4 hover:shadow-2xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Sales Performance</h2>
      <HighchartsReact highcharts={Highcharts} options={chartData.columnChart} />
    </div>
    <div className="card shadow-lg bg-white rounded-lg p-4 hover:shadow-2xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Sales Performance</h2>
      <HighchartsReact highcharts={Highcharts} options={chartData.scatterPlot} />
    </div>
    <div className="card shadow-lg bg-white rounded-lg p-4 hover:shadow-2xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Sales Performance</h2>
      <HighchartsReact highcharts={Highcharts} options={chartData.areaChart} />
    </div>
    <div className="card shadow-lg bg-white rounded-lg p-4 hover:shadow-2xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Sales Performance</h2>
      <HighchartsReact highcharts={Highcharts} options={chartData.stackedColumnChart} />
    </div>
    
  </div>
  )
}

export default MainSection