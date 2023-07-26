import './App.css';
import Table from './components/Table';
import FieldSelection from './components/FieldSelector.js';
import useSWR from 'swr';
import { Header } from './components/Header';
import { DatePicker } from './components/DatePicker';
import { useState } from 'react';
import { EmptyTable } from './components/EmptyTable.js';
import { utilFunction } from './util';

function App() {
  
const [startDateInput, setStartDateInput] = useState('2021-05-01')
const [endDateInput, setEndDateInput] = useState('2021-05-01');
const [selectedFields, setSelectedFields] =useState([])

  const fetchDates = (startDate, endDate) =>{
   setStartDateInput(startDate);
   setEndDateInput(endDate);
  }

  const selectedFieldsFunc = (selectedFieldsFromComp) =>{
   setSelectedFields(selectedFieldsFromComp)
  }

  const url = `https://go-dev.greedygame.com/v3/dummy/report?startDate=${startDateInput}&endDate=${endDateInput}`  
  const fetcher = (...args) => fetch(...args).then((res)=> res.json());
  const {data: result, error}  = useSWR(url, fetcher)

  utilFunction(result);

  return (
    <div className="App">
      <Header />        
      <DatePicker fetchDates={fetchDates}/>      
      <FieldSelection selectedFieldsFunc={selectedFieldsFunc}/>
      <div className='App-body'>
        {result?.data && result?.data?.length ? <Table data={result?.data} selectedFields={selectedFields} /> : <EmptyTable/>}
      </div>
    </div>
  );
}

export default App;