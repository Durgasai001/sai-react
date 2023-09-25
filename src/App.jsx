
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className="mybox">
      <h1>hello React js</h1>
   <Link to="/Counter" >Counter</Link>&nbsp;&nbsp;
   <Link to="/Todolist" >Todolist</Link>
   <Outlet></Outlet>
    
    </div>
  );
}

export default App;
