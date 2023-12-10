import React, { useEffect, useState } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  FlexibleXYPlot,
} from 'react-vis';
import { onValue } from 'firebase/database';
import { healthDataRef } from '../index';

const chartStyle = {
  marginBottom: '20px',
};

const BloodGlucoseChart = () => {
  const [data, setData] = useState({
    bloodGlucose: [{ x: 0, y: 0 }],
    systolicPressure: [{ x: 0, y: 0 }],
    diastolicPressure: [{ x: 0, y: 0 }],
    heartRate: [{ x: 0, y: 0 }],
  });

  const xMin = 0;
  const xMax = 24; // Assuming 24 hours

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await onValue(healthDataRef);
        const healthData = snapshot.val();

        const updatedData = {
          bloodGlucose: Object.entries(healthData).map(([key, value]) => ({
            x: key,
            y: value.bloodGlucose || 0,
          })),
          systolicPressure: Object.entries(healthData).map(([key, value]) => ({
            x: key,
            y: value.systolicPressure || 0,
          })),
          diastolicPressure: Object.entries(healthData).map(([key, value]) => ({
            x: key,
            y: value.diastolicPressure || 0,
          })),
          heartRate: Object.entries(healthData).map(([key, value]) => ({
            x: key,
            y: value.heartRate || 0,
          })),
        };
        setData(updatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // Run this effect only once on mount

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
            <LineMarkSeries data={data.bloodGlucose} />
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
            <LineMarkSeries data={data.systolicPressure} stroke="red" />
            <LineMarkSeries data={data.diastolicPressure} stroke="blue" />
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
            <LineMarkSeries data={data.heartRate} />
          </FlexibleXYPlot>
        </div>
      </div>
    </div>
  );
};

export default BloodGlucoseChart;
