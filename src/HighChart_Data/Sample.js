// chartData.js
export const chartData = {
  // Line Chart
  lineChart: {
    chart: {
      type: "line",
    },
    title: {
      text: "Sales Over Time",
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yAxis: {
      title: {
        text: "Sales (in USD)",
      },
    },
    series: [
      {
        name: "Product A",
        data: [150, 100, 50, 400, 300, 400, 450],
      },
      {
        name: "Product B",
        data: [100, 90, 70, 150, 200, 350, 400],
      },
      {
        name: "Product C",
        data: [50, 100, 150, 200, 250, 300, 350],
      },
      {
        name: "Product D",
        data: [500, 10, 130, 300, 250, 340, 350],
      },
    ],
  },

  // Pie Chart
  pieChart: {
    chart: {
      type: "pie",
    },
    title: {
      text: "Product Share of Total Sales",
    },
    series: [
      {
        name: "Share",
        data: [
          ["Product A", 35],
          ["Product B", 30],
          ["Product C", 10],
          ["Product D", 20],
          ["Product E", 5],
        ],
      },
    ],
  },

  // Column Chart
  columnChart: {
    chart: {
      type: "column",
    },
    title: {
      text: "Monthly Sales Data",
    },
    xAxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Sales (in USD)",
      },
    },
    series: [
      {
        name: "Product A",
        data: [150, 200, 250, 300, 350, 400, 450],
      },
      {
        name: "Product B",
        data: [100, 150, 200, 250, 300, 350, 400],
      },
      {
        name: "Product C",
        data: [50, 100, 150, 200, 250, 300, 350],
      },
    ],
  },

  // Scatter Plot
  scatterPlot: {
    chart: {
      type: "scatter",
      zoomType: "xy",
    },
    title: {
      text: "Product Price vs Sales",
    },
    xAxis: {
      title: {
        text: "Price (in USD)",
      },
    },
    yAxis: {
      title: {
        text: "Sales (in USD)",
      },
    },
    series: [
      {
        name: "Product A",
        color: "rgba(223, 83, 83, .5)",
        data: [
          [100, 150],
          [150, 200],
          [200, 250],
          [250, 300],
          [300, 350],
        ],
      },
      {
        name: "Product B",
        color: "rgba(119, 152, 191, .5)",
        data: [
          [100, 100],
          [150, 150],
          [200, 200],
          [250, 250],
          [300, 300],
        ],
      },
    ],
  },

  // Area Chart
  areaChart: {
    chart: {
      type: "area",
    },
    title: {
      text: "Cumulative Sales Over Time",
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yAxis: {
      title: {
        text: "Sales (in USD)",
      },
    },
    series: [
      {
        name: "Product A",
        data: [150, 200, 150, 300, 90, 400, 500],
        lineColor: "#FF5733",
        fillColor: "rgba(255, 87, 51, 0.3)",
      },
      {
        name: "Product B",
        data: [100, 150, 200, 50, 150, 40, 400],
        lineColor: "#33FF57",
        fillColor: "rgba(51, 255, 87, 0.3)",
      },
      {
        name: "Product C",
        data: [500, 10, 130, 300, 250, 340, 350],
        lineColor: "#33FF57",
        fillColor: "rgba(51, 255, 87, 0.3)",
      },
    ],
  },

  // Stacked Column Chart
  stackedColumnChart: {
    chart: {
      type: "column",
    },
    title: {
      text: "Sales by Region (Stacked)",
    },
    xAxis: {
      categories: ["Q1", "Q2", "Q3", "Q4"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Sales (in USD)",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: "gray",
        },
      },
    },
    series: [
      {
        name: "North Region",
        data: [150, 200, 250, 300],
        stack: "Region A",
      },
      {
        name: "South Region",
        data: [100, 150, 200, 250],
        stack: "Region B",
      },
      {
        name: "East Region",
        data: [50, 100, 150, 200],
        stack: "Region C",
      },
    ],
  },
};
