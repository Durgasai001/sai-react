import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails(){
    var [details,setDetails]=React.useState([])
     var x=useParams();
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/name/"+x.cname).then((res) => {
            console.log(res.data)
          setDetails([...res.data]);
        });
     },[x.cname])
    

    return(
        <div>
           
          
                {
                    details.length>0&&
                    <div>
                    <h1>Country:{details[0].name.common}</h1>
                    <h1>Population:{details[0].population}</h1>
                    <h1>Capital:{details[0].capital}</h1>
                    <img src={details[0].flags[0]} alt=""/>
                    </div>
                    
                }
               
         
               
           
           
        </div>
    )
}
export default CountryDetails;