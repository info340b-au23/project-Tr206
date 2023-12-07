import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  FlexibleXYPlot,
} from 'react-vis';

const chartStyle = {
  marginBottom: '20px',
};

export default function BloodGlucoseChart({ bloodGlucose, systolicPressure, diastolicPressure, heartRate }) {
  const bloodGlucoseData = [{ x: 0, y: parseFloat(bloodGlucose) || 0 }];
  const systolicPressureData = [{ x: 0, y: parseFloat(systolicPressure) || 0 }];
  const diastolicPressureData = [{ x: 0, y: parseFloat(diastolicPressure) || 0 }];
  const heartRateData = [{ x: 0, y: parseFloat(heartRate) || 0 }];

  const xMin = 0;
  const xMax = 24; // Assuming 24 hours

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Your Health Metrics Over 24 Hours</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Blood Glucose Chart */}
        <div style={chartStyle}>
          <h3 style={{ textAlign: 'center' }}>Blood Glucose Level</h3>
          <FlexibleXYPlot
            height={400}
            width={600}
            xType="linear"
            xDomain={[xMin, xMax]}
            yType="linear"
            yDomain={[0, 35]}
            margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Time (h)" />
            <YAxis title="Blood Glucose (mmol/h)" />
            <LineMarkSeries data={bloodGlucoseData} />
          </FlexibleXYPlot>
        </div>

        {/* Blood Pressure Chart */}
        <div style={chartStyle}>
          <h3 style={{ textAlign: 'center' }}>Blood Pressure</h3>
          <FlexibleXYPlot
            height={400}
            width={600}
            xType="linear"
            xDomain={[xMin, xMax]}
            yType="linear"
            yDomain={[0, 200]}
            margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Time (h)" />
            <YAxis title="Blood Pressure (mmHg)" />
            <LineMarkSeries data={systolicPressureData} stroke="red" />
            <LineMarkSeries data={diastolicPressureData} stroke="blue" />
          </FlexibleXYPlot>
        </div>
        
        {/* Heart Rate Chart */}
        <div style={chartStyle}>
          <h3 style={{ textAlign: 'center' }}>Heart Rate</h3>
          <FlexibleXYPlot
            height={400}
            width={600}
            xType="linear"
            xDomain={[xMin, xMax]}
            yType="linear"
            yDomain={[0, 140]}
            margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Time (h)" />
            <YAxis title="Heart Rate (BPM)" />
            <LineMarkSeries data={heartRateData} />
          </FlexibleXYPlot>
        </div>
      </div>
    </div>
  );
}


