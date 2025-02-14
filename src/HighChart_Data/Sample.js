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
        color : "#f45b5b"
      },
      {
        name: "Product B",
        data: [100, 90, 70, 150, 200, 350, 400],
        color : "#8085e9"
      },
      {
        name: "Product C",
        data: [50, 100, 150, 200, 250, 300, 350],
        color : "#8d4654"
      },
      {
        name: "Product D",
        data: [500, 10, 130, 300, 250, 340, 350],
        color : "#aaeeee"
      },
    ],
  },

  // Pie Chart
  pieChart: {
    chart: {
      type: "pie",
      backgroundColor: "#f8f8f8", // Light background to make the chart stand out
    },
    title: {
      text: "Sales Per Product",
      style: {
        fontSize: "20px", // Increase font size for the title
        fontWeight: "bold",
        color: "#333", // Darker text color
      },
    },
    tooltip: {
      valueSuffix: "%",
      backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark tooltip background
      style: {
        color: "white", // White text in the tooltip
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: 'Source: <a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
      useHTML: true, // Allow HTML in subtitle
      style: {
        fontSize: "12px",
        color: "#666", // Lighter text color for the source
      },
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            style: {
              fontSize: "12px",
              fontWeight: "bold",
              color: "#333", // Darker color for the main labels
            },
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:.1f}%",
            style: {
              fontSize: "1.2em",
              textOutline: "none",
              opacity: 0.7,
              color: "white", // White text color for percentage labels
            },
            filter: {
              operator: ">", // Only show data labels for values > 10%
              property: "percentage",
              value: 10,
            },
          },
        ],
      },
    },
    series: [
      {
        name: "Percentage",
        colorByPoint: true,
        data: [
          {
            name: "Product A",
            y: 55.02,
            color: "#62C8FF", // Custom color for Water
          },
          {
            name: "Product B",
            sliced: true,
            selected: true,
            y: 26.71,
            color: "#FF6F61", // Custom color for Fat
          },
          {
            name: "Product C",
            y: 1.09,
            color: "#8FBC8F", // Custom color for Carbohydrates
          },
          {
            name: "Product D",
            y: 15.5,
            color: "#FFD700", // Custom color for Protein
          },
          {
            name: "Product E",
            y: 1.68,
            color: "#D3D3D3", // Custom color for Ash
          },
        ],
      },
    ],
    colors: [
      "#62C8FF", // Custom colors for slices
      "#FF6F61",
      "#8FBC8F",
      "#FFD700",
      "#D3D3D3",
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
        color: "#ff0066", // Custom Color for Product A (Orange)
      },
      {
        name: "Product B",
        data: [100, 150, 200, 250, 300, 350, 400],
        color: "#8085e9", // Custom Color for Product B (Green)
      },
      {
        name: "Product C",
        data: [50, 100, 150, 200, 250, 300, 350],
        color: "#9ef0f0", // Custom Color for Product C (Blue)
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
        color: "#FF5733", // Custom Color for Product A (Red)
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
        color: "#33FF57", // Custom Color for Product B (Green)
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
        lineColor: "#FF5733", // Custom Line Color for Product A (Orange)
        fillColor: "rgba(255, 87, 51, 0.3)", // Custom Fill Color
      },
      {
        name: "Product B",
        data: [100, 150, 200, 50, 150, 40, 400],
        lineColor: "#33FF57", // Custom Line Color for Product B (Green)
        fillColor: "rgba(51, 255, 87, 0.3)", // Custom Fill Color
      },
      {
        name: "Product C",
        data: [500, 10, 130, 300, 250, 340, 350],
        lineColor: "#3399FF", // Custom Line Color for Product C (Blue)
        fillColor: "rgba(51, 153, 255, 0.3)", // Custom Fill Color
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
        color: "#f45b5b", // Custom Color for North Region (Orange)
      },
      {
        name: "South Region",
        data: [100, 150, 200, 250],
        stack: "Region B",
        color: "#7798bf", // Custom Color for South Region (Green)
      },
      {
        name: "East Region",
        data: [50, 100, 150, 200],
        stack: "Region C",
        color: "#8d4654", // Custom Color for East Region (Blue)
      },
    ],
  },
};
