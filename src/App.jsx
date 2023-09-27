
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Countries from './Countries';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className="mybox">
      <h1>hello React js</h1>
   <Link to="/Counter" >Counter</Link>&nbsp;&nbsp;
   <Link to="/Todolist" >Todolist</Link>&nbsp;&nbsp;
   <Link to="/Countries">Countries</Link>
   <Outlet></Outlet>
    
    </div>
  );
}

export default App;
