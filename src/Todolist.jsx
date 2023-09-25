import React from "react";
function Todolist(){
    var[t,setT]=React.useState([])
    function add(){
        var n=document.getElementById("fg").value 
        setT([...t,n])
    }
    function del(i){
        var nt=[...t]
        nt.splice(i,1)
        
        setT([...nt])
    }
    return(
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" id="fg"/>
            <button onClick={add}>Add todo</button>
            {
                t.map((s,i)=>{
                    return <li>
                       <h1>{s}</h1>
                       <button onClick={()=>del(i)}>delete</button>
                        </li>
                })
            }
        </div>
    )
}
export default Todolist;