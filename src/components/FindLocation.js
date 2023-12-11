import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import Papa from 'papaparse';

export function FindLocation() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterInput, setFilterInput] = useState('');
  const [noHospitalsFound, setNoHospitalsFound] = useState(false);

  useEffect(() => {
    // Load your CSV data here
    const fetchData = async () => {
      try {
        const response = await fetch('/data/Hospital_Data.csv');
        const csvData = await response.text();
        const parsedData = Papa.parse(csvData, { header: true }).data;
        setData(parsedData);
      } catch (error) {
        console.error('Error loading CSV data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once

  const findNearbyHospitals = () => {
    if (!filterInput) {
      setNoHospitalsFound(false);
      setFilteredData([]);
      return;
    }

    // Assuming your CSV has 'ZIPCode' and 'City' columns
    const hospitalsMatchingInput = data.filter(
      (hospital) =>
        hospital.ZIPCode.toLowerCase() === filterInput.toLowerCase() ||
        hospital.City.toLowerCase().includes(filterInput.toLowerCase())
    );

    if (hospitalsMatchingInput.length > 0) {
      setNoHospitalsFound(false);
      setFilteredData(hospitalsMatchingInput);
    } else {
      setNoHospitalsFound(true);
      setFilteredData([]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      findNearbyHospitals();
    }
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Find Care Near You</h1>
        </div>
      </header>
      <Navigation />
      <div className="left-container">
        <label htmlFor="filterInput">Enter ZIP code or City:</label>
        <input
          type="text"
          id="filterInput"
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <button onClick={findNearbyHospitals}>Find Nearby Hospitals</button>

        <div id="tableContainer">
          {noHospitalsFound ? (
            <p>No hospitals found in your ZIP code or City.</p>
          ) : filteredData.length === 0 ? (
            <p>No nearby hospitals found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  {Object.keys(filteredData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
