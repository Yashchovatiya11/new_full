import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ViewFaculty() {

    const [data, setData] = useState([]);


    useEffect(() => {

        axios.get('http://localhost:5000/faculty/')
            .then(res => setData(res.data.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, []);


    var handledelete = (id, e) => {

        alert('delete')
        axios.delete(`http://localhost:5000/faculty/delete/`+id)
          .then((res) => {
    
            console.log(res);
            const d = data.filter(item => item._id !== id);
            setData(d)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    
    
      }

    return (

        <>
            <div className='  '>
                <div className='d-flex justify-content-around'>
                    <h3 className='pt-3 text-center fw-bold mx-auto'>Faculty Data </h3>
                    <Link to="/home" className='ms-auto pt-3  me-5'>
                        <Button className='text-start btn btn-dark w-100 text-center' >
                            <span className='fw-bold'>Dashboard</span>
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row">
                    {
                        data.map((user, index) => {
                            return <div className="col-4 ">
                                <div class="card w-75 m-1" >
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Name :<span>{user.faculty_name}</span></li>
                                        <li class="list-group-item">Dapartment :<span>{user.faculty_department}</span></li>
                                        <li class="list-group-item">Salary:<span>{user.salary}</span></li>
                                        <li class="list-group-item">Time :<span>{user.time}</span></li>
                                        <li class="list-group-item"><Button onClick={(e) => handledelete(user._id, e)}>Delete</Button></li>
                                        {/* <li class="list-group-item"><Link to={`/update_student/${user._id}`}><Button onClick={(e) => handledelete(user._id, e)}>Delete</Button></Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ViewFaculty;