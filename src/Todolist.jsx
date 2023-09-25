import React from "react";
function Todolist(){
    var [todos, setTodos]=React.useState([])
    function abc(){
        var v=document.getElementById("ss").value 
         setTodos([...todos,v])
    }
    
    return(
        <div className="mybox">
            <input type="text" id="ss"></input>
            <button onClick={abc}>Add todo</button>
            {
                todos.map((todo,i)=>{
                    return (
                        <li>
                            {todo}
                        </li>
                    )
                })
            }
        </div>
    )
}
export default Todolist;