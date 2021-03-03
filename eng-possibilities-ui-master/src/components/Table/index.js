import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";
import { TextField } from '@material-ui/core';




const Table2 = () => {
    
  const [energy, setEnergy] = useState(0);
  const [energyInDollars, setEnergyInDollars] = useState(0);

  const [technology, setTechnology] = useState(0);
  const [technologyInDollars, setTechnologyInDollars] = useState(0);

  const [financialServices, setFinancialServices] = useState(0);
  const [financialServicesInDollars, setFinancialServicesInDollars] = useState(0);

  const [realEstate, setRealEstate] = useState(0);
  const [realEstateInDollars, setRealEstateInDollars] = useState(0);


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
    const dollars = 100*event.target.value;
    setEnergyInDollars(dollars);
    // console.log("in energyInputOnChange " + energyDollar + " " + event.target.value);
}
const technologyInputOnChange = (event) => {
    setTechnology(event.target.value);
    const dollars = 100*event.target.value;
    setTechnologyInDollars(dollars);
    // console.log("in energyInputOnChange " + energyDollar + " " + event.target.value);
}

const financialServicesInputOnChange = (event) => {
    setFinancialServices(event.target.value);
    const dollars = 100*event.target.value;
    setFinancialServicesInDollars(dollars);
    // console.log("in energyInputOnChange " + energyDollar + " " + event.target.value);
}

const realEstateInputOnChange = (event) => {
    setRealEstate(event.target.value);
    const dollars = 100*event.target.value;
    setRealEstateInDollars(dollars);
    // console.log("in energyInputOnChange " + energyDollar + " " + event.target.value);
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
                {/* Energy */}
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
            
                {/* Technology */}
                <tr>
                    <td> Technology </td>
                    <td> 6 </td>
                    <td> {technologyInDollars} </td>
                    <td> 
                        <TextField
                            id="technology-input"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue="0"
                            variant="outlined"
                            onChange={technologyInputOnChange}
                        />
                    </td>
                </tr>
            
                {/* Financial Services */}
                <tr>
                    <td> Financial Services </td>
                    <td> 4 </td>
                    <td> {financialServicesInDollars} </td>
                    <td> 
                        <TextField
                            id="financialServices-input"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue="0"
                            variant="outlined"
                            onChange={financialServicesInputOnChange}
                        />
                    </td>
                </tr>

                {/* Real Estate */}
                <tr>
                    <td> Real Estate </td>
                    <td> 15 </td>
                    <td> {realEstateInDollars} </td>
                    <td> 
                        <TextField
                            id="realEstate-input"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue="0"
                            variant="outlined"
                            onChange={realEstateInputOnChange}
                        />
                    </td>
                </tr>

                <tr>
                    <td> Pharmaceuticals </td>
                    <td> 10 </td>
                    <td> number </td>
                    <td> 
                        <TextField
                            id="realEstate-input"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue="0"
                            variant="outlined"
                            
                        />
                    </td>
                </tr>

                <tr>
                    <td> Airline </td>
                    <td> 10 </td>
                    <td> number </td>
                    <td> 
                        <TextField
                            id="realEstate-input"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue="0"
                            variant="outlined"
                            
                        />
                    </td>
                </tr>

                <tr>
                    <td> Retail </td>
                    <td> 10 </td>
                    <td> number </td>
                    <td> 
                        <TextField
                            id="realEstate-input"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue="0"
                            variant="outlined"
                            
                        />
                    </td>
                </tr>

                <tr>
                    <td> Gaming </td>
                    <td> 12 </td>
                    <td> number </td>
                    <td> 
                        <TextField
                            id="realEstate-input"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue="0"
                            variant="outlined"
                            
                        />
                    </td>
                </tr>
                <tr>
                    <td>  </td>
                    <td></td>
                    <td>  </td>
                    <td> 
                        <button onClick={handleSubmit}>
                            Update!
                        </button>
                    </td>
                </tr>

            </tbody>

        </Table>
              
    </div>
  );


};



export default Table2;


//calling backend