import React, { useState, useEffect } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  FlexibleXYPlot,
} from 'react-vis';
import { ref, onValue, push, set } from 'firebase/database';
import { healthDataRef } from '../firebase/FirebaseConfig';

const chartStyle = {
  marginBottom: '20px',
};

export const BloodGlucoseChart = () => {
  const [chartData, setChartData] = useState({
    bloodGlucose: [],
    systolicPressure: [],
    diastolicPressure: [],
    heartRate: [],
  });

  const [bloodGlucose, setBloodGlucose] = useState('');
  const [systolicPressure, setSystolicPressure] = useState('');
  const [diastolicPressure, setDiastolicPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const xMin = 0;
  const xMax = 24; // Assuming 24 hours

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await onValue(healthDataRef); // healthDataRef needs to be defined or imported
        const healthData = snapshot.val();

        if (healthData) {
          const updatedData = {
            bloodGlucose: healthData.bloodGlucose || [],
            systolicPressure: healthData.systolicPressure || [],
            diastolicPressure: healthData.diastolicPressure || [],
            heartRate: healthData.heartRate || [],
          };

          updatedData.bloodGlucose = updatedData.bloodGlucose.map(({ timestamp, value }) => ({
            x: timestamp,
            y: value,
          }));

          setChartData(updatedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Update the state with the input values
      await updateBloodGlucose(bloodGlucose);
      await updateSystolicPressure(systolicPressure);
      await updateDiastolicPressure(diastolicPressure);
      await updateHeartRate(heartRate);
  
      // Clear the input fields after submission
      setBloodGlucose('');
      setSystolicPressure('');
      setDiastolicPressure('');
      setHeartRate('');
    };
    fetchData();
  }, []);


  const updateBloodGlucose = async (newBloodGlucoseValue) => {
    const dataRef = ref(healthDataRef.child('bloodGlucose'));
    const newEntryRef = push(dataRef);
    const timestamp = Date.now();

    try {
      await set(newEntryRef, { timestamp, value: newBloodGlucoseValue });
    } catch (error) {
      console.error('Error updating blood glucose data:', error);
    }
  };

  const updateSystolicPressure = async (newSystolicPressureValue) => {
    const dataRef = ref(healthDataRef.child('systolicPressure'));
    const timestamp = Date.now();
  
    try {
      await push(dataRef, { timestamp, value: newSystolicPressureValue });
    } catch (error) {
      console.error('Error updating systolic pressure data:', error);
    }
  };

  const updateDiastolicPressure = async (newDiastolicPressureValue) => {
    const dataRef = ref(healthDataRef.child('diastolicPressure'));
    const timestamp = Date.now();
  
    try {
      await push(dataRef, { timestamp, value: newDiastolicPressureValue });
    } catch (error) {
      console.error('Error updating diastolic pressure data:', error);
    }
  };

  const updateHeartRate = async (newHeartRateValue) => {
    const dataRef = ref(healthDataRef.child('heartRate'));
    const timestamp = Date.now();
  
    try {
      await push(dataRef, { timestamp, value: newHeartRateValue });
    } catch (error) {
      console.error('Error updating heart rate data:', error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Your Health Metrics Over 24 Hours</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Blood Glucose Chart */}
        <div style={chartStyle}>
          <h3 style={{ textAlign: 'center' }}>Blood Glucose Level</h3>
          {chartData.bloodGlucose.length > 0 ? (
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
              <LineMarkSeries data={chartData.bloodGlucose} />
            </FlexibleXYPlot>
          ) : (
            <p>No blood glucose data available</p>
          )}
        </div>

        {/* Systolic Pressure Chart */}
        <div style={chartStyle}>
          <h3 style={{ textAlign: 'center' }}>Systolic Pressure</h3>
          {chartData.systolicPressure.length > 0 ? (
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
              <YAxis title="Systolic Pressure (mmHg)" />
              <LineMarkSeries data={chartData.systolicPressure} stroke="red" />
            </FlexibleXYPlot>
          ) : (
            <p>No systolic pressure data available</p>
          )}
        </div>

        {/* Diastolic Pressure Chart */}
        <div style={chartStyle}>
          <h3 style={{ textAlign: 'center' }}>Diastolic Pressure</h3>
          {chartData.diastolicPressure.length > 0 ? (
            <FlexibleXYPlot
              height={400}
              width={600}
              xType="linear"
              xDomain={[xMin, xMax]}
              yType="linear"
              yDomain={[0, 120]}
              margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis title="Time (h)" />
              <YAxis title="Diastolic Pressure (mmHg)" />
              <LineMarkSeries data={chartData.diastolicPressure} stroke="blue" />
            </FlexibleXYPlot>
          ) : (
            <p>No diastolic pressure data available</p>
          )}
        </div>

        {/* Heart Rate Chart */}
        <div style={chartStyle}>
          <h3 style={{ textAlign: 'center' }}>Heart Rate</h3>
          {chartData.heartRate.length > 0 ? (
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
              <LineMarkSeries data={chartData.heartRate} />
            </FlexibleXYPlot>
          ) : (
            <p>No heart rate data available</p>
          )}
        </div>
      </div>
    </div>
  );
};