import React, { Component } from "react";
import StudentService from "../services/StudentService";

export class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    StudentService.getAllStudents().then((res) => {
      this.setState({ students: res });
    });
    // console.log("result ==== "+result);
    // this.setState({students:result});
  }
  deleteStudent=(e,id)=>{
    e.preventDefault();
    StudentService.deleteStudent(id).then(res=>{console.log(res.date)});
    window.location.reload("./list");
  }
  updateStudent=(e,id)=>{
    e.preventDefault();
    alert("Updating Student Id : "+id);
    window.location.replace("/update/"+id);
  }
  render() {
    return (
      <div className="container" style={{marginTop:20}}>
        <div className="card">
          <div className="card-header">
            <h1>Student List</h1>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.students.map((s, i) => {
                  return (
                    <tr key={i}>
                      <td>{s.id}</td>
                      <td>{s.name}</td>
                      <td>{s.course}</td>
                      <td>
                      <button className="btn btn-primary" onClick={(e)=>{this.updateStudent(e,s.id)}} style={{marginRight:15}}>Update</button>
                        <button className="btn btn-danger" onClick={(e)=>{this.deleteStudent(e,s.id)}}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentList;
