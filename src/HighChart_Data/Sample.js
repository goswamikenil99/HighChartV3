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

  // Heatmap Chart
  heatmapChart: {
    chart: {
      type: "heatmap",
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1,
    },

    title: {
      text: "Sales per employee per weekday",
      style: {
        fontSize: "1em",
      },
    },

    xAxis: {
      categories: [
        "Alexander",
        "Marie",
        "Maximilian",
        "Sophia",
        "Lukas",
        "Maria",
        "Leon",
        "Anna",
        "Tim",
        "Laura",
      ],
    },

    yAxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      title: null,
      reversed: true,
    },

    accessibility: {
      point: {
        descriptionFormat:
          "{(add index 1)}. " +
          "{series.xAxis.categories.(x)} sales " +
          "{series.yAxis.categories.(y)}, {value}.",
      },
    },

    colorAxis: {
      min: 0,
      minColor: "#FFFFFF",
    },

    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 280,
    },

    tooltip: {
      format:
        "<b>{series.xAxis.categories.(point.x)}</b> sold<br>" +
        "<b>{point.value}</b> items on <br>" +
        "<b>{series.yAxis.categories.(point.y)}</b>",
    },

    series: [
      {
        name: "Sales per employee",
        borderWidth: 1,
        data: [
          [0, 0, 10],
          [0, 1, 19],
          [0, 2, 8],
          [0, 3, 24],
          [0, 4, 67],
          [1, 0, 92],
          [1, 1, 58],
          [1, 2, 78],
          [1, 3, 117],
          [1, 4, 48],
          [2, 0, 35],
          [2, 1, 15],
          [2, 2, 123],
          [2, 3, 64],
          [2, 4, 52],
          [3, 0, 72],
          [3, 1, 132],
          [3, 2, 114],
          [3, 3, 19],
          [3, 4, 16],
          [4, 0, 38],
          [4, 1, 5],
          [4, 2, 8],
          [4, 3, 117],
          [4, 4, 115],
          [5, 0, 88],
          [5, 1, 32],
          [5, 2, 12],
          [5, 3, 6],
          [5, 4, 120],
          [6, 0, 13],
          [6, 1, 44],
          [6, 2, 88],
          [6, 3, 98],
          [6, 4, 96],
          [7, 0, 31],
          [7, 1, 1],
          [7, 2, 82],
          [7, 3, 32],
          [7, 4, 30],
          [8, 0, 85],
          [8, 1, 97],
          [8, 2, 123],
          [8, 3, 64],
          [8, 4, 84],
          [9, 0, 47],
          [9, 1, 114],
          [9, 2, 31],
          [9, 3, 48],
          [9, 4, 91],
        ],
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            yAxis: {
              labels: {
                format: "{substr value 0 1}",
              },
            },
          },
        },
      ],
    },
  },
};
