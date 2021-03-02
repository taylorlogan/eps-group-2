import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";
import { TextField } from '@material-ui/core';




const Table2 = () => {
    
  const [energy, setEnergy] = useState(0);
  const [energyInDollars, setEnergyInDollars] = useState(0);


//   const [technology, setTechnology] = useState(0);
//   const [financialServices, setFinancialServices] = useState(0);
//   const [realEstate, setRealEstate] = useState(0);
//   const [pharmaceuticals, setPharmaceuticals] = useState(0);
//   const [airline, setAirline] = useState(0);
//   const [retail, setRetail] = useState(0);
//   const [gaming, setGaming] = useState(0);
  
const handleSubmit = (event) => {
    // call backend
    // validate % input
    // total % is less than 100%, 
    // each percent is > min

}

const energyInputOnChange = (event) => {
    setEnergy(event.target.value);
    const energyDollar = 100*event.target.value;
    setEnergyInDollars(energyDollar);
    console.log("in energyInputOnChange " + energyDollar + " " + event.target.value);
}

  return (
    <div>
      <p>Investment Allocations</p>
        <Table>
            <thead>
                <tr>
                    <th> Asset Name </th>
                    <th> Minimum % </th>
                    <th> Dollars $ </th>
                    <th> Percentage % </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Energy </td>
                    <td> 5 </td>
                    <td> {energyInDollars} </td>
                    <td> 
                        <TextField
                            id="energy-input"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue="0"
                            variant="outlined"
                            onChange={energyInputOnChange}
                        />
                    </td>
                </tr>
            </tbody>

        </Table>
        
      <p>You clicked {energy} times</p>
      <button onClick={handleSubmit}>
        Update!
      </button>
    </div>
  );


};



export default Table2;


//calling backend