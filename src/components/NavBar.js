import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CreateStudent from './CreateStudent'
import StudentList from './StudentList'
import UpdateStudent from './UpdateStudent'

export class NavBar extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
           <ul>
            <li>
                <Link to="/create">Create Student</Link>
            </li>
            <li>
                <Link to="/list">Student List</Link>
            </li>
           </ul>
           <Routes>
            <Route path='/create' element={<CreateStudent/>}/>
            <Route  path='/list' element={<StudentList/>}/>
            <Route path="/update/:id" element={<UpdateStudent/>}/>
           </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default NavBar
