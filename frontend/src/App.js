import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Result from './components/result/Result';
import Attendence from './components/attendence/Attendence';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/dashboard' element= {<Dashboard/>}/>
        <Route path='/allResult' element = {<Result/>}/>
        <Route path='/attendence' element = {<Attendence/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
