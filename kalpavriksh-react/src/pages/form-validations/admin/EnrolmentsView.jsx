import React from "react";
import AdminNav from "../../../user/shared/AdminNav";
import { useState,useEffect } from 'react';

const EnrolmentsView = () => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedDate, setSelectedDate] = useState(''); 
  const [selectedYear, setSelectedYear] = useState("");
  const [data,setData] = useState({})
  const handleProgramChange = (event) => {
    setSelectedProgram(event.target.value);
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };
  useEffect(() => {
    const newData = { ...data };
    if (selectedProgram !== '') {
      newData.program = selectedProgram;
    } else {
      delete newData.program;
    }
    if (selectedDate !== '') {
      newData.date = selectedDate;
    } else {
      delete newData.date;
    }
    if (selectedYear !== '') {
      newData.year = selectedYear;
    } else {
      delete newData.year;
    }
    setData(newData);
  }, [selectedYear, selectedDate, selectedProgram]);
  console.log('o/p',data)
  return (
    <>
      <div className="dashboard__Container">
        <AdminNav />
        <header className="header__Shadow">
          <div className="header__Container">
            <h1 className="header__Heading--Primary">
              Dashboard - SUPER ADMIN
            </h1>
          </div>
        </header>
        <main>
          <div className="dashboard__Main-Content">
            {/* Replace with your content */}
            <div className="form__Grid--Cols-6">
              <div className="form__Cols--Span-2">
                <label htmlFor="program" className="form__Label-Heading">
                  Select Program
                </label>
                <select
                  id="program"
                  name="program"
                  autoComplete="program-name"
                  className="form__Select"
                  onChange={handleProgramChange}
                //  value={selectedProgram}
                >
                  <option value="" data-default>Select Program</option>
                  <option>Program 1</option>
                  <option>Program 2</option>
                  <option>Program 3</option>
                  <option>Program 4</option>
                </select>
              </div>
              <div className="form__Cols--Span-2">
                <label htmlFor="program-date" className="form__Label-Heading">
                  Select Program Date
                </label>
                <input
                  type="date"
                  name="program-date"
                  id="program-date"
                  autoComplete="program-name"
                  className="form__Input"
                  onChange={handleDateChange}
                />
              </div>
              <div className="form__Cols--Span-2">
                <label htmlFor="program-year" className="form__Label-Heading">
                  Select Year
                </label>
                <select
                  id="program-year"
                  name="program-year"
                  autoComplete="program-year-name"
                  className="form__Select"
                  onChange={handleYearChange}
                >
                  <option value="" data-default> Select Program Year</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
            <div className="my-10">
              <div className="list__Flexbox--Center">
                <ul className="list__Container">
                  <li className="list__Heading list__Round--Top-Lg">
                    Program Name:
                    <span className="list__Heading--Span">Program 1</span>
                  </li>
                  <li className="list__Heading">
                    Active Patients:
                    <span className="list__Heading--Span">150</span>
                  </li>
                  <li className="list__Heading">
                    New Patients:
                    <span className="list__Heading--Span">48</span>
                  </li>
                  <li className="list__Heading">
                    Program Name:
                    <span className="list__Heading--Span">
                        Active Patients: 150, <br /> New Patients: 48
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default EnrolmentsView;