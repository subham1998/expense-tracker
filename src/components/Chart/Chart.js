import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointsValue = dataPoints.map((point) => point.value);
  const maxValue = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {dataPoints.map((point) => {
        return (
          <ChartBar
            key={point.label}
            value={point.value}
            maxValue={maxValue}
            label={point.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
