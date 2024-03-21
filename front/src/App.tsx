import React, { useState, useEffect } from 'react';
import './App.css';
import { Calendar } from '@admiral-ds/react-ui';
import SidePanel from './models/Navigation';
import { T, Link } from '@admiral-ds/react-ui';

interface Security {
  symbol: string;
  name: string;
}

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [securities, setSecurities] = useState<Security[]>([]);
  const [count, setCount] = useState(0);

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
    // You can perform any additional logic here based on the newDate value
  };
  useEffect(() => {
    fetch('http://localhost:5000/api/securities')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setSecurities(data))
      .catch(error => console.error('Error fetching securities:', error));
  }, []);

  return (
    <>
      <Calendar onChange={handleDateChange} />
      <SidePanel />
    </>
  );
}

export default App;
