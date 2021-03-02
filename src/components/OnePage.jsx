import { useEffect, useMemo, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import { sendRequest } from "../api/reuest";
import { chartCreator } from "../api/helperFunctions";

function OnePage({ isPage }) {
  const [data, setData] = useState([]);
  const [timeLine, setTimeLine] = useState("1m");

  useEffect(() => {
    const controller = new AbortController();
    const abort = { signal: controller.signal };

    (async () => {
      const { chart } = await sendRequest(
        `v1/charts?period=${timeLine}&coinId=${isPage.id}`,
        abort
      );
      const arr = [];
      chart.forEach((item) => arr.push(item[1]));
      setData(arr);
    })();
    return () => controller.abort();
  }, [timeLine]);

  return (
    <div className="project__chart">
      <HighchartsReact highcharts={Highcharts} options={chartCreator(data)} />
      <div className="project__chart-date">
        <span
          className={timeLine === "24h" ? "red" : ""}
          onClick={() => setTimeLine("24h")}
        >
          24H
        </span>
        <span
          className={timeLine === "1w" ? "red" : ""}
          onClick={() => setTimeLine("1w")}
        >
          1W
        </span>
        <span
          className={timeLine === "1m" ? "red" : ""}
          onClick={() => setTimeLine("1m")}
        >
          1M
        </span>
        <span
          className={timeLine === "3m" ? "red" : ""}
          onClick={() => setTimeLine("3m")}
        >
          3M
        </span>
        <span
          className={timeLine === "6m" ? "red" : ""}
          onClick={() => setTimeLine("6m")}
        >
          6M
        </span>
        <span
          className={timeLine === "1y" ? "red" : ""}
          onClick={() => setTimeLine("1y")}
        >
          1Y
        </span>
        <span
          className={timeLine === "all" ? "red" : ""}
          onClick={() => setTimeLine("all")}
        >
          ALL
        </span>
      </div>
    </div>
  );
}

export default OnePage;
