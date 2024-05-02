import React from "react";
import Card from 'react-bootstrap/Card';
import '../components/Css/Dashboard.css';
import { Link } from "react-router-dom";

import axios from 'axios';
// import { useState } from 'react';

// import { Button } from 'react-bootstrap'

function Dashbord() {

    // let [logout_user, setlogout_user] = useState('');

    const btnhandle  = ()  => {
        axios.post('http://localhost:5000/logout', {

        }).then(function (response) {
            // handle success
            console.log(response);
            if (response.data.status === "succesfully logged out") {
                alert("success")
            }
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    
    return (
        <>
            <div className='dashcol'>
                <div className='d-flex dashpad space m-3'>
                    <div>
                        <h4>Dashboard</h4>
                    </div>
                    <div className='d-flex  w-25'>
                        <div>
                            <Link className='ps-3 btn btn-dark text-white ' to="/admin">Admin</Link>
                        </div>
                        <div>
                            <Link  className='ps-3 ms-3 btn btn-dark text-white ' onClick={btnhandle} to="/login">
                                <button  type="submit" className="text-light">
                                    Logout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='dashpad d-flex gap-3 pr-2 m-3 '>

                    {/* -------------------- card 1 -------------------- */}

                    <Card style={{ width: '14.5rem' }} className='cardcol1 cardtxtcol'>
                        <Card.Body className='main-card'>
                            <Card.Title className='text-start m-2'><h2 className='fontwe'>99</h2></Card.Title>
                            <Card.Text className='text-start m-2'>
                                New orders
                            </Card.Text>
                            <Card.Link className='link' href='/home'>More info</Card.Link>
                        </Card.Body>
                    </Card>

                    {/* -------------------- card 2 -------------------- */}

                    <Card style={{ width: '14.5rem' }} className='cardcol2 cardtxtcol'>
                        <Card.Body className='main-card1'>
                            <Card.Title className='text-start m-2'><h2 className='fontwe'>50%</h2></Card.Title>
                            <Card.Text className='text-start m-2'>
                                Bounce Rate
                            </Card.Text>
                            <Card.Link className='link' href="/home">More info</Card.Link>
                        </Card.Body>
                    </Card>

                    {/* -------------------- card 3 -------------------- */}

                    <Card style={{ width: '14.5rem' }} className='cardcol3 cardtxtcol'>
                        <Card.Body className='main-card2'>
                            <Card.Title className='text-start m-2'><h2 className='fontwe'>40</h2></Card.Title>
                            <Card.Text className='text-start m-2'>
                                User Registrations
                            </Card.Text>
                            <Card.Link className='link' href="/home">More info</Card.Link>
                        </Card.Body>
                    </Card>

                    {/* -------------------- card 4 -------------------- */}

                    <Card style={{ width: '14.5rem' }} className='cardcol4 cardtxtcol'>
                        <Card.Body className='main-card3'>
                            <Card.Title className='text-start m-2'><h2 className='fontwe'>60</h2></Card.Title>
                            <Card.Text className='text-start m-2'>
                                Unique Visitors
                            </Card.Text>
                            <Card.Link className='link' href="/home">More info</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}
export default Dashbord;