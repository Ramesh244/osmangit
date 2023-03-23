import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentService from "../services/StudentService";

function UpdateStudent() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [course, setCourse] = useState();
  useEffect(() => {
    StudentService.getStudentById(id).then((res) => {
      console.log(res);
      setName(res.name);
      setCourse(res.course);
    });
  }, []);
  const updateStudent = (e) => {
    e.preventDefault();
    alert("Calling Updated Method "+id+" "+name+" "+course);
    let updateStudent = {
        id:id,
        name:name,
        course:course
    }
    StudentService.editStudent(id,updateStudent).then(res=>{
        console.log(res);
    })
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Update Student</h1>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Student Id</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={id}
                // onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Student Course</label>
              <input
                type="text"
                className="form-control"
                name="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={(e)=>updateStudent(e)}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudent;
