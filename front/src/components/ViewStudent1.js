import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ViewStudent1() {

    const id = useParams();

    const [data, setData] = useState(null);

    console.log(id.id);

    useEffect(() => {
        if (id != undefined) {
            axios.get('http://localhost:5000/student/' + id.id)
                .then(res => setData(res.data.data))
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }


    }, []);

    console.log(data)

    // var handledelete = (id, e) => {


    //     axios.delete(`http://localhost:5000/student/delete/` + id)
    //         .then((res) => {

    //             console.log(res);
    //             const d = data.filter(item => item._id !== id);
    //             setData(d)
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })


    // }

    return (

        <>
            <div className='  '>
                <div className='d-flex justify-content-around'>
                    <h3 className='pt-3 text-center fw-bold mx-auto'> Student Data </h3>
                    <Link to="/home" className='ms-auto pt-3'>
                        <Button className='text-start btn btn-dark w-100 text-center' >
                            <span className='fw-bold'>Dashboard</span>
                        </Button>
                    </Link>
                </div>

                <br />

                <div>


                    <div class="card m-5 mx-auto w-50" >

                        {


                            data != null &&

                            <div class="p-3 text-start">
                                <h4>Full Name : <span className='h5'>{data.surname} {data.name} {data.lastname}</span></h4>
                                <div class="card-header"></div>
                                <div class="card-body">

                                    <div className='d-flex'><b>Date Of Birth :</b><p class="card-text ms-3">{data.dob}</p></div>
                                    <div className='d-flex'><b>Gender :</b><p class="card-text ms-3">{data.gender}</p></div>

                                    <h5 className='pt-3'>Contect Details</h5><hr />
                                    <div>
                                        <b>Contect Number</b><p class="card-text">{data.contact_number}</p>
                                        <b>Whatshapp Number</b><p class="card-text">{data.whatsapp_number}</p>
                                        <b>parents Number</b><p class="card-text">{data.father_contactnumber}</p>
                                    </div>

                                    <div className='d-flex'><b>Address :</b><p class="card-text ms-3">{data.adress}</p></div>
                                    <div className='d-flex'><b>Qualification :</b><p class="card-text ms-3">{data.qualification}</p></div>
                                    <div className='d-flex'><b>Course Name :</b><p class="card-text ms-3">{data.course_name}</p></div>
                                    <div className='d-flex'><b>Starting Date :</b><p class="card-text ms-3">{data.course_start_date}</p></div>
                                    <div className='d-flex'><b>Pc/Laptop :</b><p class="card-text ms-3">{data.pc_laptop}</p></div>
                                    <div className='d-flex pt-2'>
                                        <b>Installment :</b>
                                        <table class=" w-75 border border-1 ms-3">{data.installment.map((user, index) => {
                                            return (
                                                <tr className='border border-1'>
                                                    <td>{index+1}</td><td>{user}</td>
                                                </tr>
                                            )
                                        })}

                                        </table>
                                    </div>

                                </div>
                            </div>


                        }



                    </div>
                </div>


            </div>
        </>

    )
}

export default ViewStudent1;