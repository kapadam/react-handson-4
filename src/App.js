import React,{useState} from 'react';
import { Routes,Route } from 'react-router-dom';
import Student from './Components/Student';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import DataContext from './Components/DataContext';
import Add from './Components/Add';
import Edit from './Components/Edit';
import "./App.css";
function App(){
  const [data,setData]=useState([{name:'name1',age:1,course:'fswd',batch:'ea18'},{name:'name2',age:3,course:'eferg',batch:'uwdcg'}]);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/add' element={
        <DataContext.Provider  value={{entries:data,updateFunction:setData}}>
          
          <Add/>
        </DataContext.Provider>
       }></Route>
        <Route path='/student' element={
          <DataContext.Provider value={{entries:data,updateFunction:setData}}>
            <Student/>
          </DataContext.Provider>
        
        }></Route>
        <Route path='/edit' element={
          <DataContext.Provider value={{entries : data, updateFunction : setData}}>
            <Edit/>
          </DataContext.Provider>
        }></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
