import React from "react";
function Counter(){
    var[c,setC]=React.useState(100)
    function inc(){
        setC(c+10)
    }
    function dec(){
        setC(c-10)
    }
    return (<div className="mybox">
         <h1>Counter:{c}</h1>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
    </div>

    )
}
export default Counter;