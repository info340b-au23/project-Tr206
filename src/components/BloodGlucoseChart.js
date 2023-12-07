import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  ChartLabel,
  FlexibleXYPlot,
} from 'react-vis';

export default function BloodGlucoseChart({ bloodGlucose, systolicPressure, diastolicPressure }) {
  const bloodGlucoseData = [{ x: 0, y: parseInt(bloodGlucose) || 0 }];
  const bloodPressureData = [
    { x: 0, y: parseInt(systolicPressure) || 0 },
    { x: 4, y: parseInt(diastolicPressure) || 0 },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Your Health Metrics Over 24 Hours</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Blood Glucose Chart */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>Blood Glucose Level</h3>
          <FlexibleXYPlot
            height={400}
            width={600}
            xType="linear"
            yType="linear"
            margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Time (h)" />
            <YAxis title="Blood Glucose (mmol/h)" />
            <LineSeries data={bloodGlucoseData} />
          </FlexibleXYPlot>
        </div>

        {/* Blood Pressure Chart */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>Blood Pressure</h3>
          <FlexibleXYPlot
            height={400}
            width={600}
            xType="linear"
            yType="linear"
            margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Time (h)" />
            <YAxis title="Blood Pressure (mmHg)" />
            <LineSeries data={bloodPressureData} />
          </FlexibleXYPlot>
        </div>
      </div>
    </div>
  );
}

// export default function HealthCharts({ bloodGlucose, systolicPressure, diastolicPressure }) {
//   const bloodGlucoseData = [
//     { x: 0, y: 5 },
//     { x: 4, y: 7 },
//     { x: 8, y: 3 },
//     { x: 12, y: 5 },
//     { x: 16, y: 7 },
//     { x: 20, y: 3 },
//     { x: 24, y: 5 },
//     // Add more data points as needed
//   ];

//   const heartRateData = [
//     { x: 0, y: 60 },
//     { x: 4, y: 75 },
//     { x: 8, y: 80 },
//     { x: 12, y: 65 },
//     { x: 16, y: 70 },
//     { x: 20, y: 75 },
//     { x: 24, y: 68 },
//     // Add more data points as needed
//   ];

//   const bloodPressureData = [
//     { x: 0, y: 120 },
//     { x: 4, y: 130 },
//     { x: 8, y: 110 },
//     { x: 12, y: 125 },
//     { x: 16, y: 118 },
//     { x: 20, y: 122 },
//     { x: 24, y: 115 },
//     // Add more data points as needed
//   ];

//   const xMin = 0;
//   const xMax = 24; // Assuming 24 hours

//   const chartStyle = {
//     marginBottom: '20px',
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: 'center' }}>Your Health Metrics Over 24 Hours</h2>
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         {/* Blood Glucose Chart */}
//         <div style={chartStyle}>
//           <h3 style={{ textAlign: 'center' }}>Blood Glucose Level</h3>
//           <FlexibleXYPlot
//             height={400} // Adjust the height as needed
//             width={600} // Adjust the width as needed
//             xType="linear"
//             xDomain={[xMin, xMax]}
//             yType="linear"
//             yDomain={[0, 35]} // Adjust the y-axis range based on your data
//             margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
//           >
//             <VerticalGridLines />
//             <HorizontalGridLines />
//             <XAxis title="Time (h)" />
//             <YAxis title="Blood Glucose (mmol/h)" />
//             <LineSeries data={bloodGlucoseData} />
//           </FlexibleXYPlot>
//         </div>

//         {/* Heart Rate Chart */}
//         <div style={chartStyle}>
//           <h3 style={{ textAlign: 'center' }}>Heart Rate</h3>
//           <FlexibleXYPlot
//             height={400} // Adjust the height as needed
//             width={600} // Adjust the width as needed
//             xType="linear"
//             xDomain={[xMin, xMax]}
//             yType="linear"
//             yDomain={[0, 140]} // Adjust the y-axis range based on your data
//             margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
//           >
//             <VerticalGridLines />
//             <HorizontalGridLines />
//             <XAxis title="Time (h)" />
//             <YAxis title="Heart Rate (BPM)" />
//             <LineSeries data={heartRateData} />
//           </FlexibleXYPlot>
//         </div>

//         {/* Blood Pressure Chart */}
//         <div style={chartStyle}>
//           <h3 style={{ textAlign: 'center' }}>Blood Pressure</h3>
//           <FlexibleXYPlot
//             height={400} // Adjust the height as needed
//             width={600} // Adjust the width as needed
//             xType="linear"
//             xDomain={[xMin, xMax]}
//             yType="linear"
//             yDomain={[0, 200]} // Adjust the y-axis range based on your data
//             margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
//           >
//             <VerticalGridLines />
//             <HorizontalGridLines />
//             <XAxis title="Time (h)" />
//             <YAxis title="Blood Pressure (mmHg)" />
//             <LineSeries data={bloodPressureData} />
//           </FlexibleXYPlot>
//         </div>
//       </div>
//     </div>
//   );
// }
