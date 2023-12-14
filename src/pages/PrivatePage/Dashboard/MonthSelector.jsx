// temporarily written on state, need to change to redux

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const MonthSelector = ({ selectedMonthFromPath }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [months, setMonths] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const generatedMonths = Array.from({ length: 6 }, (_, index) => {
      const date = new Date(currentYear, currentMonth - index, 1);
      return {
        value: date.toLocaleString('en', { month: 'long' }).toLowerCase(),
        label: date.toLocaleString('en', { month: 'long' }),
      };
    });

    setMonths(generatedMonths);

    if (selectedMonthFromPath) {
      const selectedMonthOption = generatedMonths.find(
        (month) => month.value === selectedMonthFromPath
      );
      setSelectedMonth(selectedMonthOption);
    }
  }, [selectedMonthFromPath]);

  const handleChange = (selectedOption) => {
    setSelectedMonth(selectedOption);

    if (selectedOption) {
      navigate(`/dashboard/${selectedOption.value}`);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <>
      <Select
        options={months}
        value={selectedMonth}
        onChange={handleChange}
        placeholder="Month"
      />
      {selectedMonth && <p>{selectedMonth.label}</p>}
    </>
  );
};

export default MonthSelector;
