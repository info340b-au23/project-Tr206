import React from 'react';
import {
  FlexibleXYPlot,
  LineMarkSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from 'react-vis';

const chartStyle = {
  marginBottom: '20px',
};

const formatXAxis = (tick) => {
  const date = new Date(tick);
  return date.getHours();
};
const xMin = 0;
const xMax = 24;
export const BloodGlucoseChart = ({ chartData }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Your Health Metrics Over One Day</h2>

      {/* Blood Glucose Chart */}
      <div style={chartStyle}>
        <h3>Blood Glucose Level</h3>
        <FlexibleXYPlot
          height={300}
          width={400}
          xType="linear"
          margin={{ left: 50 }}
          xDomain={[new Date().setHours(0,0,0,0), new Date().setHours(23, 59, 59, 999)]}
          yType='linear'
          yDomain={[0, 35]}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Time (Hours)" tickFormat={formatXAxis} />
          <YAxis title="Blood Glucose (mmol/h)" />
          {/* render whenn data*/}
          <LineMarkSeries data={chartData.bloodGlucose} />
        </FlexibleXYPlot>
      </div>

      {/* Systolic Pressure Chart */}
      <div style={chartStyle}>
        <h3>Systolic Pressure</h3>
        <FlexibleXYPlot
          height={300}
          width={400}
          xType="linear"
          margin={{ left: 50 }}
          xDomain={[new Date().setHours(0,0,0,0), new Date().setHours(23, 59, 59, 999)]}
          yType='linear'
          yDomain={[0, 200]}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Time (Hours)" tickFormat={formatXAxis} />
          <YAxis title="Systolic Pressure (mmHg)" />
          <LineMarkSeries data={chartData.systolicPressure} />
        </FlexibleXYPlot>
      </div>

      {/* Diastolic Pressure Chart */}
      <div style={chartStyle}>
        <h3>Diastolic Pressure</h3>
        <FlexibleXYPlot
          height={300}
          width={400}
          xType="linear"
          margin={{ left: 50 }}
          xDomain={[new Date().setHours(0,0,0,0), new Date().setHours(23, 59, 59, 999)]}
          yType='linear'
          yDomain={[0, 200]}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Time (Hours)" tickFormat={formatXAxis} />
          <YAxis title="Diastolic Pressure (mmHg)" />
          <LineMarkSeries data={chartData.diastolicPressure} />
        </FlexibleXYPlot>
      </div>

      {/* Heart Rate Chart */}
      <div style={chartStyle}>
        <h3>Heart Rate</h3>
        <FlexibleXYPlot
          height={300}
          width={400}
          xType="linear"
          margin={{ left: 50 }}
          xDomain={[new Date().setHours(0,0,0,0), new Date().setHours(23, 59, 59, 999)]}
          yType='linear'
          yDomain={[0, 140]}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Time (Hours)" tickFormat={formatXAxis} />
          <YAxis title="Heart Rate (bpm)" />
          <LineMarkSeries data={chartData.heartRate} />
        </FlexibleXYPlot>
      </div>
    </div>
  );
};
