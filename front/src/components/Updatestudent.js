import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from "./Sidebar";



function Updatestudent() {

    const navigate = useNavigate();
    const id = useParams();
    console.log(id);

    const [data, setData] = useState([]);
    let [name, setname] = useState('');
    let [lastname, setlastname] = useState('');
    let [surname, setsurname] = useState('');
    let [dob, setdob] = useState('');
    let [gender, setgender] = useState('');
    let [contact_no, setcontact_no] = useState('');
    let [whatsapp_number, setwhatsapp_number] = useState('');
    let [father_contactnumber, setfather_contactnumber] = useState('');
    let [adress, setadress] = useState('');
    let [qualification, setqualification] = useState('');
    let [image, setimage] = useState('');
    let [course_name, setcourse_name] = useState('');
    let [course_start_date, setcourse_start_date] = useState('');
    let [pc_laptop, setpc_laptop] = useState('');
    let [installment, setinstallment] = useState('');
    let [error, setError] = useState('');



    useEffect(() => {

        axios.get('http://localhost:5000/student/' + id.id)
            .then(res => {
                setname(res.data.data.name)
                setlastname(res.data.data.lastname)
                setsurname(res.data.data.surname)
                setgender(res.data.data.gender)
                setdob(res.data.data.dob)
                setcontact_no(res.data.data.contact_no)
                setwhatsapp_number(res.data.data.whatsapp_number)
                setadress(res.data.data.father_contactnumber)
                setqualification(res.data.data.father_contactnumber)
                setcourse_name(res.data.data.father_contactnumber)
                setcourse_start_date(res.data.data.father_contactnumber)
                setpc_laptop(res.data.data.father_contactnumber)
                // setfather_contactnumber(res.data.data.father_contactnumber)
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []);

    console.log(data);

    const btnupdate = (id) => {
        axios.post('http://localhost:5000/student/' + id, {

            name: name,
            surname: surname,
            lastname: lastname,
            dob: dob,
            gender: gender,
            contact_number: contact_no,
            whatsapp_number: whatsapp_number,
            father_contactnumber: father_contactnumber,
            adress: adress,
            qualification: qualification,
            // image: state.base64URL,
            course_name: course_name,
            course_start_date: course_start_date,
            pc_laptop: pc_laptop,
            installment: installment

        })
            .then(res => {



                if (res.data.status === "updated successfully") {
                    setError(res.data.status);
                    navigate(`/view_student/${id}`)
                    // return false;
                }

            }).catch(function (error) {
                console.log(error);
                console.log(3);
            })


    }
    return (
        <>

            <div className="container mt-5 p-5 text-start">
                <form>
                    <div>
                        <h3 >Update Form</h3>

                        {/* name */}
                        <div className="form-group mt-3 d-flex gap-3">
                            <label className="col-2 align-content-center">Student Full Name :</label>
                            <input
                                type="text"
                                value={name}
                                className="form-control mt-1"
                                onChange={(e) => { setname(e.target.value) }}
                                placeholder="Enter name"
                            />
                            <input
                                type="text"
                                className="form-control mt-1"
                                value={lastname}
                                onChange={(e) => { setlastname(e.target.value) }}
                                placeholder="Enter father Name"
                            />
                            <input
                                type="text"
                                className="form-control mt-1"
                                value={surname}
                                onChange={(e) => { setsurname(e.target.value) }}
                                placeholder="Enter Surname"
                            />
                        </div>

                        {/* dob & gender */}
                        <div className="form-group mt-3 d-flex gap-3">

                            <div className="col-6 d-flex gap-5">
                                <label className="col-3 align-content-center">Date of Birth :</label>
                                <input
                                    type="date"
                                    value={dob}
                                    className="form-control mt-1"
                                    onChange={(e) => { setdob(e.target.value) }}
                                />
                            </div>

                            <div className="col-6 d-flex gap-3 pe-5">
                                <label className=" align-content-center ms-auto">Gender :</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value={"Male"}
                                    className=" mt-1"
                                    onChange={(e) => { setgender(e.target.value) }}
                                />
                                <label className="align-content-center "> Male</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value={"Female"}
                                    className=" mt-1"
                                    onChange={(e) => { setgender(e.target.value) }}
                                />
                                <label className="align-content-center"> Female</label>
                            </div>
                        </div>

                        {/* number */}
                        <div className="form-group mt-3 d-flex gap-3">
                            <label className="col-2 align-content-center">Contact Details :</label>
                            <input
                                type="text"
                                maxLength={10}
                                value={contact_no}
                                className="form-control mt-1"
                                onChange={(e) => { setcontact_no(e.target.value) }}
                                placeholder="Contact Number"
                            />
                            <input
                                type="text"
                                maxLength={10}
                                value={whatsapp_number}
                                className="form-control mt-1"
                                onChange={(e) => { setwhatsapp_number(e.target.value) }}
                                placeholder="Whatshapp Number"
                            />
                            <input
                                type="text  "
                                maxLength={10}
                                value={father_contactnumber}
                                className="form-control mt-1"
                                onChange={(e) => { setfather_contactnumber(e.target.value) }}
                                placeholder="Father Contact Number"
                            />
                        </div>

                        {/* address */}
                        <div className="form-group mt-3 d-flex gap-3">
                            <label className="col-2">Address :</label>
                            <textarea
                                rows={4}
                                value={adress}
                                className="form-control mt-1"
                                onChange={(e) => { setadress(e.target.value) }}
                                placeholder="Enter Your Current Address"
                            />
                        </div>

                        {/* qaulification */}
                        <div className="form-group mt-3 d-flex gap-3">
                            <label className="col-2 ">Qualification :</label>
                            <select id="qaulification" value={qualification} className="form-control" onChange={(e) => { setqualification(e.target.value) }}>
                                <option value="None">None</option>
                                <option value="S.S.C.">S.S.C.</option>
                                <option value="H.S.C." >H.S.C.</option>
                                <option value="Post Graduate">Post Graduate</option>
                                <option value="Master Graduate">Master Graduate</option>
                            </select>
                        </div>

                        {/* image */}
                        <div className="form-group mt-3 d-flex gap-3">
                            <label className="col-2 align-content-center">Student Photo  :</label>
                            <input
                                type="file"
                                className="form-control mt-1"
                                onChange={(e) => { setimage(e.target.value) }}
                            />
                        </div>

                        {/* Course name */}
                        <div className="form-group mt-3 d-flex gap-3">
                            <label className="col-2 ">Courses :</label>
                            <select id="course" className="form-control" value={course_name} onChange={(e) => { setcourse_name(e.target.value) }}>
                                <option value="CCC">CCC</option>
                                <option value="Front End Development">Front End Development</option>
                                <option value="Back End Delelopment" >Back End Delelopment</option>
                                <option value="Flutter">Flutter</option>
                                <option value="Full stack development">Full stack development</option>
                            </select>
                        </div>

                        {/* Course start date */}
                        <div className="form-group mt-3 d-flex gap-3">

                            <div className="col-7 d-flex gap-5">
                                <label className="col-3 align-content-center">Start Date :</label>
                                <input
                                    type="date"
                                    value={course_start_date}
                                    className="form-control mt-1"
                                    onChange={(e) => { setcourse_start_date(e.target.value) }}
                                />
                            </div>
                        </div>

                        {/* Pc_laptop */}
                        <div className="form-group mt-3 d-flex gap-3 col-5">
                            <label className="col-4 ">PC & Laptop :</label>
                            <select id="pc_laptop" className="form-control" value={pc_laptop} onChange={(e) => { setpc_laptop(e.target.value) }}>
                                <option value="PC" >PC</option>
                                <option value="Laptop">Laptop</option>
                            </select>
                        </div>

                        <div className="d-grid gap-2 mt-3 col-2">
                            <Link onClick={() => btnupdate(id.id)} className='submit'>
                                <button type="submit" className="btn btn-primary" >
                                    Update
                                </button>
                            </Link>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}




export default Updatestudent;