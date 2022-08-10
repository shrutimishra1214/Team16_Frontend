// import './App.css';
// import TradeDashboard from './pages/TradesDashboard';
// import Dashboard from './pages/Dashboard';
// function App() {
//   return (
//     <div className="App">

//         {/* <TradeDashboard/> */}
//         <Dashboard/>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/navpages/profile";
import AddBond from "./Components/navpages/addBond";
import Login from "./Components/navpages/LoginPage";
import Dashboard from './pages/Dashboard';
import TradeDashboard from './pages/TradesDashboard';

function App() {
  // return (
  //   <Dashboard />
  // );
  var loggedin = JSON.parse(localStorage.getItem('user'));
  return (
    <BrowserRouter>
    {/*{!loggedin && <Header />}
       <Header /> */}
      <Routes>
        <Route path='/' exact element = {<Login/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/trades" element={<TradeDashboard />} />
        <Route path="/add" element={<AddBond/>}/>
        <Route path="/profile" element={<Profile/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;