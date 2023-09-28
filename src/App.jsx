import React from 'react';
import './App.css';
import { useEffect } from 'react';


function App() {
  var [s,setS]=React.useState([])
  var firstnameRef=React.useRef();
  var lastnameRef=React.useRef();
  var sumRef=React.useRef();
 
  function av(e){
    if(e.key==="Enter"){
      lastnameRef.current.focus();
    }
    
   }
   function ax(e){
    var x=+(firstnameRef.current.value)
    var y=+(lastnameRef.current.value)
    if(e.key==="Enter"){
      sumRef.current.focus();
      if(!isNaN(x)&&!isNaN(y)){
        sumRef.current.value=s
      }
      else{
        sumRef.current.value="Enter a valid number"
      }
      
    }
   
    setS(x+y)
    
   }
  
  
   useEffect(()=>{
    firstnameRef.current.focus()
    
   },[])

  
  return (
    <div className='mybox'>
       <h1>Formhandling</h1>
       <label>A</label>
        <input type="text" ref={firstnameRef} onKeyUp={(e)=>{av(e)}} />
        <br/>
       <label>B</label>
        <input type="text"  ref={lastnameRef} onKeyUp={(e)=>{ax(e)}} />
        <br/>
        <label>A+B</label>
       <input type="text" ref={sumRef}/>
       
       
       

      
    </div>
  );
}

export default App;
