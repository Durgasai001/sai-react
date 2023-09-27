import React from "react";
function Todolist(){
    var [todos, setTodos]=React.useState([])
    function abc(){
        var v=document.getElementById("ss").value 
         setTodos([...todos,v])
    }
    function del(i){
        var tn=[...todos]
        tn.splice(i,1)
       setTodos([...tn])
    }
    
    return(
        <div className="mybox">
            <input type="text" id="ss"></input>
            <button onClick={abc}>Add todo</button>
          <ol>  {
                todos.map((todo,i)=>{
                    return (
                        <li>
                           <h1>{todo}</h1>
                           <button onClick={()=>del(i)}>delete</button>
                        </li>
                    )
                })
            }</ol>
        </div>
    )
}
export default Todolist;