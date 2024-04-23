import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";



function AddFaculty() {

    var [faculty_name, setfaculty_name] = useState('');
    var [faculty_department, setfaculty_department] = useState('');
    var [salary, setsalary] = useState('');
    var [time, settime] = useState('');



    const btnhandler = () => {

        axios.post('http://localhost:5000/faculty/addfaculty', {
            faculty_name: faculty_name,
            faculty_department: faculty_department,
            salary: salary,
            time: time
        }).then(function (response) {
            console.log(response);
            if (response.data.status === "successfully add") {
                Navigate("/admin")
            }
        }).catch(function (error) {
            console.log(error);
        })

    };

    return (

        <>
            <div className='add'>
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">

                            <h3 className="Auth-form-title">Add Faculty</h3>

                            <div className="form-group mt-3">
                                <label>Faculty name</label>
                                <input
                                    type="text"
                                    onChange={(e) => { setfaculty_name(e.target.value) }}
                                    className="form-control mt-1"
                                    placeholder="text your course"
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label>Dapartment</label>
                                <input
                                    type="text"
                                    onChange={(e) => { setfaculty_department(e.target.value) }}
                                    className="form-control mt-1"
                                    placeholder="Enter Course Fee"
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label>Salary</label>
                                <input
                                    type="text"
                                    onChange={(e) => { setsalary(e.target.value) }}
                                    className="form-control mt-1"
                                    placeholder="Enter Course Fee"
                                />
                            </div>

                            {/* Course name */}
                            <div className="form-group mt-3 gap-3">
                                <label className="col-2 ">Time</label>
                                <select id="time" className="form-control" onChange={(e) => { settime(e.target.value) }}>
                                    <option value="CCC">Half Time</option>
                                    <option value="Front End Development">Full Time</option>
                                </select>
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <Link to="/admin">
                                    <button type="submit" className="btn btn-primary" onClick={btnhandler}>
                                        Submit
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddFaculty;