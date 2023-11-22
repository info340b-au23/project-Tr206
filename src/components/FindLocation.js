import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import Papa from 'papaparse';

export function FindLocation() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterZipCode, setFilterZipCode] = useState('');
  const [noHospitalsFound, setNoHospitalsFound] = useState(false);

  useEffect(() => {
    // Load your CSV data here
    const fetchData = async () => {
      try { 
        const response = await fetch('/data/Hospital_Data.csv');
        const csvData = await response.text();
        console.log('Fetched CSV Data:', csvData); // Log fetched CSV data for debugging
        const parsedData = Papa.parse(csvData, { header: true }).data;
        console.log('Parsed Data:', parsedData);
        setData(parsedData);
      } catch (error) {
        console.error('Error loading CSV data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once

  const findNearbyHospitals = () => {
  if (!filterZipCode) {
    setNoHospitalsFound(false);
    setFilteredData([]);
    return;
  }

  // Assuming your CSV has a 'ZIPCode' column
  const hospitalsInZipCode = data.filter(
    (hospital) => hospital.ZIPCode === filterZipCode.toLowerCase()
  );
  console.log('hospitalsInZipCode:', hospitalsInZipCode);

  if (hospitalsInZipCode.length > 0) {
    setNoHospitalsFound(false);
    setFilteredData(hospitalsInZipCode);
  } else {
    setNoHospitalsFound(true);
    setFilteredData([]);
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
        <label htmlFor="filterZipCode">Enter ZIP code:</label>
        <input
          type="text"
          id="filterZipCode"
          value={filterZipCode}
          onChange={(e) => setFilterZipCode(e.target.value)}
        />

        <button onClick={findNearbyHospitals}>Find Nearby Hospitals</button>

        <div id="tableContainer">
          {noHospitalsFound ? (
            <p>No hospitals found in your ZIP code.</p>
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
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, index) => (
                      <td key={index}>{value}</td>
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
