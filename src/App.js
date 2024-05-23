import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState,createContext } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Navbar from './Navbar';

export const AppContext=createContext()

function App() {

  const [name,setName]=useState("")

  return (
    <div className="App">
      <AppContext.Provider value={{name,setName}}>
      <Router>
      <input onChange={(event)=>{
        setName(event.target.value)

      }} />
      <div>
        <Navbar/>

      </div>
        <Routes>
          <Route  path="/"  element={<Home/>}   /> 
          <Route  path="/profile"  element={<Profile/>}   /> 
          <Route  path="/contact"  element={<Contact/>}   /> 
        </Routes>
      </Router>
      </AppContext.Provider>
     

    </div>
  );
}

export default App;