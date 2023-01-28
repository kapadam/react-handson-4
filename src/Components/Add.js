import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import DataContext from './DataContext';
const Add = () => {
    const context=useContext(DataContext);
    const handleChange=(e)=>{
        console.log(e.target.value);
    }
    const onSubmit=(e)=>{
        console.log(context.entries);
    }
  return (
    <div>
        <input className='name' onChange={handleChange} name='name' placeholder='Name'></input>
        <input onChange={handleChange} name='age' placeholder='Age'></input><br/>
        <input className='course' onChange={handleChange} name='course' placeholder='Course'></input>
        <input onChange={handleChange} name='batch' placeholder='Batch'></input>
        <br/>
        <button style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginRight:'80px',marginTop:'80px',marginLeft:'900px'}}><Link to='/student' style={{textDecoration:'none',color:'black',fontSize:'1.3em'}}>Cancel</Link></button>
        <button style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginRight:'80px',fontSize:'1.3em'}} className='submit' onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Add