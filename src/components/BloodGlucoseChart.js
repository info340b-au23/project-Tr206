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

export const BloodGlucoseChart = ({ chartData }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Your Health Metrics Over 24 Hours</h2>

      {/* Blood Glucose Chart */}
      <div style={chartStyle}>
        <h3>Blood Glucose Level</h3>
        <FlexibleXYPlot
          height={300}
          width={400}
          xType="time"
          margin={{ left: 50 }}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Time" />
          <YAxis title="Blood Glucose (mmol/L)" />
          <LineMarkSeries data={chartData.bloodGlucose} />
        </FlexibleXYPlot>
      </div>

      {/* Systolic Pressure Chart */}
      <div style={chartStyle}>
        <h3>Systolic Pressure</h3>
        <FlexibleXYPlot
          height={300}
          width={400}
          xType="time"
          margin={{ left: 50 }}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Time" />
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
          xType="time"
          margin={{ left: 50 }}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Time" />
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
          xType="time"
          margin={{ left: 50 }}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Time" />
          <YAxis title="Heart Rate (bpm)" />
          <LineMarkSeries data={chartData.heartRate} />
        </FlexibleXYPlot>
      </div>
    </div>
  );
};
