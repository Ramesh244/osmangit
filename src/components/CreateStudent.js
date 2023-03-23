import React, { useState } from "react";
import StudentService from "../services/StudentService";

const CreateStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const createStudent=()=>{
    let student = {
        id:id,
        name:name,
        course:course
    }
    StudentService.createStudent(student).then(res=>{
        console.log(res.data);
    })
    alert("calling")
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Create Student</h1>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Student Id</label>
              <input
                type="text"
                className="form-control"
                name="id"
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Student Course</label>
              <input
                type="text"
                className="form-control"
                name="course"
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={createStudent}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
