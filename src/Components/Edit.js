import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import DataContext from './DataContext';
import { Link } from 'react-router-dom';



function Edit() {
   const context = useContext(DataContext);
   const location = useLocation(); // returns the location object 
   console.log(location.state.data) 
   const index = (location.state.data);
   
 
   

   return (
    <>
        <input className='name'name='name' value= {context.entries[index].name}></input>
        <input name='age'   value= {context.entries[index].age}></input>
        <br/>
        <input className='course' name='course'   value= {context.entries[index].course}></input>
        <input name='batch'   value= {context.entries[index].batch}></input>
        <button style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginRight:'80px',marginTop:'80px',marginLeft:'900px'}}><Link to='/student' style={{textDecoration:'none',color:'black',fontSize:'1.3em'}}>Cancel</Link></button>
        <button style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginRight:'80px',fontSize:'1.3em'}} className='submit' >Update</button>
    </>
  )
}

export default Edit;