import React from "react";
function Counter(props){
    var [c,setC]=React.useState(props.x)
    function inc(){
        setC(c+props.y)
    }
    function dec(){
        setC(c-props.y)
    }
    return(
        <div className="mybox">
            <h1>Counter:{c}</h1>
            <button onClick={inc}>increment</button>
            <button onClick={dec}>increment</button>
        </div>
    )
}
export default Counter;