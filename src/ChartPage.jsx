// ChartPage.js
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { useLocation } from 'react-router-dom'; // Use to get the props passed from the Link



const ChartPage = () => {
  // Get the chart data and chart type from the props passed via Link
  const location =useLocation();
  //console.log(location.state)
  const  data  = location.state || {};

  if (!data) {
    return <div>No data provided!</div>;
  }

  return (
    <div>
      <h2>{data.title.text}</h2>
      <HighchartsReact highcharts={Highcharts} options={data} />
    </div>
  );
};

export default ChartPage;
