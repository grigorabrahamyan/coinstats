import Highcharts from "highcharts";

export const chartCreator = (data) => {
    return {
        chart: {
          zoomType: "x",
          backgroundColor: "#1c1b1b",
        },
        title: {
          text: "",
        },
        xAxis: {
          type: "datetime",
        },
        yAxis: {
          title: {
            text: "",
          },
        },
        legend: {
          enabled: true,
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [
                  1,
                  Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0)
                    .get("rgba"),
                ],
              ],
            },
            lineWidth: 0.5,
            states: {
              hover: {
                lineWidth: 0.5,
              },
            },
            threshold: null,
          },
        },
        series: [
          {
            type: "area",
            name: "USD",
            data: data,
          },
        ],
        tooltip: {
          backgroundColor: Highcharts.getOptions().colors[0],
          borderColor: "black",
          borderRadius: 10,
          borderWidth: 3,
        },
      };
};