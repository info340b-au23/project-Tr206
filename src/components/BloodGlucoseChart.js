import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
} from 'index';

export default function BloodGlucoseChart() {
  const data = [
    { x: 0, y: 5 },
    { x: 4, y: 7 },
    { x: 8, y: 3 },
    { x: 0, y: 5 },
    { x: 4, y: 7 },
    { x: 8, y: 3 },
    { x: 0, y: 5 },
    { x: 4, y: 7 },
    { x: 8, y: 3 },
    // Add more data points as needed
  ];

  const xMin = 0;
  const xMax = 24; // Assuming 24 hours
  const yMin = 0;
  const yMax = 35; // Adjust the y-axis range based on your data

  return (
    <XYPlot
      width={600} // Adjust the width as needed
      height={300}
      xType="linear"
      xDomain={[xMin, xMax]}
      yType="linear"
      yDomain={[yMin, yMax]}
      margin={{ top: 10, right: 10, left: 60, bottom: 40 }}
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries data={data} />
    </XYPlot>
  );
}
