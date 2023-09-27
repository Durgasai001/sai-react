import React from "react";
import axios from "axios";
import Countriesdetails from "./CountryDetails";
import {Link, Outlet} from 'react-router-dom';
function Countries(){
    var[country,setCountry]=React.useState([])
    React.useEffect(() => {
        axios.get("https://restcountries.com/v3/all").then((res) => {
         
          setCountry([...res.data]);
        });
      }, []);
    return (
    <div className="mybox">
        <h1>Countries</h1>
        <ol className="app">
            {
                
              country.length>0 && country.map((c)=>{
                        return <li>
                           <h3>Country:{c.name.common}</h3>
                           <img src={c.flags[0]} width="100px" alt=""/>
                           <Link to={"/countries/CountryDetails/"+c.name.common}>Readmore</Link>
                            </li>
                    })
            }
        </ol>
        <div>
          <Outlet></Outlet>
        </div>
        
    </div>
    )
}
export default Countries;