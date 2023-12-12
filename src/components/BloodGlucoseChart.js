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
  const [time, setTime] = useState('');

  const xMin = 0;
  const xMax = 24; // Assuming 24 hours
  // update data in firebase
  const updateBloodGlucose = async (newBloodGlucoseValue, newTime) => {
    // reference node
    const dataRef = ref(healthDataRef, 'bloodGlucose');
    // generate new node and reference
    const newEntryRef = push(dataRef);
    // record time
    const timestamp = newTime || Date.now();
    // record new node by set
    try {
      // wait for finish
      await set(newEntryRef, { timestamp, value: newBloodGlucoseValue });
      // get errors to controller if appear errors
    } catch (error) {
      console.error('Error updating blood glucose data:', error);
    }
  };

  const updateSystolicPressure = async (newSystolicPressureValue, newTime) => {
    const dataRef = ref(healthDataRef, 'systolicPressure');
    const timestamp = newTime || Date.now();

    try {
      await push(dataRef, { timestamp, value: newSystolicPressureValue });
    } catch (error) {
      console.error('Error updating systolic pressure data:', error);
    }
  };

  const updateDiastolicPressure = async (newDiastolicPressureValue, newTime) => {
    const dataRef = ref(healthDataRef, 'diastolicPressure');
    const timestamp = newTime || Date.now();

    try {
      await push(dataRef, { timestamp, value: newDiastolicPressureValue });
    } catch (error) {
      console.error('Error updating diastolic pressure data:', error);
    }
  };

  const updateHeartRate = async (newHeartRateValue, newTime) => {
    const dataRef = ref(healthDataRef, 'heartRate');
    const timestamp = newTime || Date.now();

    try {
      await push(dataRef, { timestamp, value: newHeartRateValue });
    } catch (error) {
      console.error('Error updating heart rate data:', error);
    }
  };
  // form submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTime = Date.parse(time);
    // Update the state with the input values
    await updateBloodGlucose(bloodGlucose, newTime);
    await updateSystolicPressure(systolicPressure, newTime);
    await updateDiastolicPressure(diastolicPressure, newTime);
    await updateHeartRate(heartRate, newTime);

    // Clear the input fields after submission
    setBloodGlucose('');
    setSystolicPressure('');
    setDiastolicPressure('');
    setHeartRate('');
  };
  // effect hook to fetch data from firebase when components mounts
  useEffect(() => {
    // fetchdata function to obtain data
    const fetchData = async () => {
      try {
        // listen to change by healthdataref
        const snapshot = await onValue(healthDataRef);
        // obtain data from snapshot
        const healthData = snapshot.val();
        // if data exist
        if (healthData) {
          const updatedData = {
            // if not exist = blank group
            bloodGlucose: healthData.bloodGlucose || [],
            systolicPressure: healthData.systolicPressure || [],
            diastolicPressure: healthData.diastolicPressure || [],
            heartRate: healthData.heartRate || [],
          };
          // map data to the required format for the chart
          updatedData.bloodGlucose = updatedData.bloodGlucose.map(({ timestamp, value }) => ({
            x: timestamp,
            y: value,
          }));

          // Update the state with fetched data
          setChartData(updatedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Your Health Metrics Over 24 Hours</h2>

      {/* Blood Glucose Chart */}
      <div style={chartStyle}>
        <h3 style={{ textAlign: 'center' }}>Blood Glucose Level</h3>
        {chartData.bloodGlucose.length > 0 ? (
          <FlexibleXYPlot
            height={400}
            width={600}
            xType="time"
            xDomain={[xMin, xMax]}
            yType="linear"
            yDomain={[0, 35]}
            margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
          >
            <LineMarkSeries data={chartData.bloodGlucose} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Time" />
            <YAxis title="Blood Glucose (mmol/h)" />
          </FlexibleXYPlot>
        ) : (
          <p>No blood glucose data available</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Blood Glucose Level:
          <input
            type="number"
            value={bloodGlucose}
            onChange={(e) => setBloodGlucose(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time (optional)"
          />
        </label>
        <button type="submit" aria-label="Submit Blood Glucose">Submit Blood Glucose</button>
      </form>

      {/* Systolic Pressure Chart */}
      <div style={chartStyle}>
        <h3 style={{ textAlign: 'center' }}>Systolic Pressure</h3>
        {chartData.systolicPressure.length > 0 ? (
          <FlexibleXYPlot
            height={400}
            width={600}
            xType="time"
            xDomain={[xMin, xMax]}
            yType="linear"
            yDomain={[0, 200]}
            margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Time" />
            <YAxis title="Systolic Pressure (mmHg)" />
            <LineMarkSeries data={chartData.systolicPressure} stroke="red" />
          </FlexibleXYPlot>
        ) : (
          <p>No systolic pressure data available</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Systolic Pressure:
          <input
            type="number"
            value={systolicPressure}
            onChange={(e) => setSystolicPressure(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time (optional)"
          />
        </label>
        <button type="submit" ria-label="Submit Systolic Pressure">Submit Systolic Pressure</button>
      </form>

      {/* Diastolic Pressure Chart */}
      <div style={chartStyle}>
        <h3 style={{ textAlign: 'center' }}>Diastolic Pressure</h3>
        {chartData.diastolicPressure.length > 0 ? (
          <FlexibleXYPlot
            height={400}
            width={600}
            xType="time"
            xDomain={[xMin, xMax]}
            yType="linear"
            yDomain={[0, 120]}
            margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Time" />
            <YAxis title="Diastolic Pressure (mmHg)" />
            <LineMarkSeries data={chartData.diastolicPressure} stroke="blue" />
          </FlexibleXYPlot>
        ) : (
          <p>No diastolic pressure data available</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Diastolic Pressure:
          <input
            type="number"
            value={diastolicPressure}
            onChange={(e) => setDiastolicPressure(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time (optional)"
          />
        </label>
        <button type="submit" ria-label="Submit Diastolic Pressure">Submit Diastolic Pressure</button>
      </form>

      {/* Heart Rate Chart */}
      <div style={chartStyle}>
        <h3 style={{ textAlign: 'center' }}>Heart Rate</h3>
        {chartData.heartRate.length > 0 ? (
          <FlexibleXYPlot
            height={400}
            width={600}
            xType="time"
            xDomain={[xMin, xMax]}
            yType="linear"
            yDomain={[0, 140]}
            margin={{ top: 40, right: 10, left: 40, bottom: 40 }}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Time" />
            <YAxis title="Heart Rate (BPM)" />
            <LineMarkSeries data={chartData.heartRate} />
          </FlexibleXYPlot>
        ) : (
          <p>No heart rate data available</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Heart Rate:
          <input
            type="number"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time (optional)"
          />
        </label>
        <button type="submit" ria-label="Submit Heart Rate">Submit Heart Rate</button>
      </form>
    </div>
  );
};
