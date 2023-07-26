import '../styles/FieldSelection.css';
import { useState } from 'react';


const FieldSelection = ({selectedFieldsFunc}) => {
    const allFields = [{ active:'true',name: "date" }, { active: true, name: "app_id" }, { active: true, name: "clicks" },
  { active: true, name: "requests" }, { active: true, name: "responses" }, { active: true, name: "impressions" },
  { active: true, name: "revenue" }, { active: true, name: "fillrate" }, { active: true, name: "ctr" }]

    const [selectedFields, setSelectedFields] = useState(allFields);  
    selectedFieldsFunc(selectedFields);
  

  const handleFieldButtonClick = (name) => {
    selectedFields.forEach((value, index) => {
      if (value.name === name) {
        const updatedSelectedFields = Object.assign([], selectedFields)
        updatedSelectedFields[index].active = !updatedSelectedFields[index].active
        console.log(value);
        setSelectedFields(updatedSelectedFields)
      }
    })
  }
     

    return (
        <div>
            <h5 className='my-3 mx-5'style={{ marginBottom: "5px" }}>Dimensions and Metrics</h5>
            {selectedFields.map((currSelectedField) => currSelectedField.active ?
                <button onClick={() => handleFieldButtonClick(currSelectedField.name)} className="activeBtn">{currSelectedField.name}</button>
                : <button onClick={() => handleFieldButtonClick(currSelectedField.name)} className="inactiveBtn">{currSelectedField.name}</button>)}
                   
        </div>
    )
}

export default FieldSelection;