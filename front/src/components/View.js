// import React from "react";
import '../components/Css/Addcourse.css';
import React, { } from "react";
import '../components/Css/Login.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';



function View_course() {

    const [data, setData] = useState([]);

    useEffect(() => {

        // setData([data])

        axios.get('http://localhost:5000/course/')
            .then(json => setData(json.data.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);


    console.log(data);


    return (




        <>
            <div className='view container'>

                <div className='d-flex justify-content-around'>
                    <h3 className='pt-3 text-center fw-bold mx-auto'> View Our Course</h3>
                    <Link to="/home" className='ms-auto pt-3'>
                        <Button className='text-start btn btn-dark w-100 text-center' >
                            <span className='fw-bold'>Dashboard</span>
                        </Button>
                    </Link>
                </div>


                <br />

                <div>
                    <table id='users' className='table'>
                        <thead>
                            <tr className='p-2'>
                                <th>Name</th>
                                {/* <th>content</th> */}
                                {/* <th>Fees</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((user, index) => {
                                    return <tr>
                                        <td>{user.c_name}</td>
                                        {/* <td>{user.content_id.content}</td> */}
                                        {/* <td>{user.content_id.course_fee}</td> */}
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default View_course;