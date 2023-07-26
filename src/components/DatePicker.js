import { useEffect, useState } from "react";

export const DatePicker = ({fetchDates}) =>{
    const [startDate, setStartDate] = useState('2021-05-01');
    const [endDate, setEndDate] = useState('2021-05-01');

    const startDateHandler = (event) => {
        setStartDate(event.target.value);
      }
      const endDateHandler = (event) => {
        setEndDate(event.target.value);
      }
     fetchDates(startDate, endDate)
    
    return(
        <>
    <input className='mx-5 my-2' type="date" onChange={startDateHandler} value={startDate} />
    <input type="date" onChange={endDateHandler} value={endDate} />
    </>
    )
}