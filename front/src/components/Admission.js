import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';



function Admission() {

  
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
  // let [image, setimage] = useState('');
  let [state, setState] = useState({
    file:null,
    base64URL:""
  });
  let [course_name, setcourse_name] = useState('');
  let [course_start_date, setcourse_start_date] = useState('');
  let [pc_laptop, setpc_laptop] = useState('');
  let [installment, setinstallment] = useState('');
  let [error, setError] = useState('');

  console.log(state);
 const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

 const handleFileInputChange = e => {
    console.log(e.target.files[0]);
    let { file } = state;

    file = e.target.files[0];

    getBase64(file)
      .then(result => {
        file["base64"] = result;
        console.log(result, file);
        setState({
          base64URL: result,
        });
      })
      .catch(err => {
        console.log(err);
      });

    setState({
      file: e.target.files[0]
    });
  };

  const btnhandle = () => {
    console.log("Hello");
    alert("hell9");
  }

  useEffect(() => {

    axios.get('http://localhost:5000/faculty/')
      .then(res => console.log(res.data.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, []);


  const btnsubmit = () => {
   
    axios.post('http://localhost:5000/student/addstudent', {

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
      image:state.base64URL ,
      course_name: course_name,
      course_start_date: course_start_date,
      pc_laptop: pc_laptop,
      installment: installment

    }).then(function (response) {
      // handle success
      console.log(response);
      if (response.data.status === "success") {
        Navigate("/admin")
        console.log(2);
      }

    })
      .catch(function (error) {
        // handle error
        console.log(error);
        console.log(3);
      })
  }


  return (
    <>

      <div className="container mt-5 p-5 text-start">
        <form method="post" enctype="multipart/form-data">
          <div>
            <h3 >Admission Form</h3>

            {/* name */}
            <div className="form-group mt-3 d-flex gap-3">
              <label className="col-2 align-content-center">Student Full Name :</label>
              <input
                type="text"
                className="form-control mt-1"
                onChange={(e) => { setname(e.target.value) }}
                placeholder="Enter name"
              />
              <input
                type="text"
                className="form-control mt-1"
                onChange={(e) => { setlastname(e.target.value) }}
                placeholder="Enter father Name"
              />
              <input
                type="text"
                className="form-control mt-1"
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
                className="form-control mt-1"
                onChange={(e) => { setcontact_no(e.target.value) }}
                placeholder="Contact Number"
              />
              <input
                type="text"
                maxLength={10}
                className="form-control mt-1"
                onChange={(e) => { setwhatsapp_number(e.target.value) }}
                placeholder="Whatshapp Number"
              />
              <input
                type="text  "
                maxLength={10}
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
                className="form-control mt-1"
                onChange={(e) => { setadress(e.target.value) }}
                placeholder="Enter Your Current Address"
              />
            </div>

            {/* qaulification */}
            <div className="form-group mt-3 d-flex gap-3">
              <label className="col-2 ">Qualification :</label>
              <select id="qaulification" className="form-control" onChange={(e) => { setqualification(e.target.value) }}>
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
                onChange={handleFileInputChange}
              />
            </div>

            {/* Course name */}
            <div className="form-group mt-3 d-flex gap-3">
              <label className="col-2 ">Courses :</label>
              <select id="course" className="form-control" onChange={(e) => { setcourse_name(e.target.value) }}>
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
                  className="form-control mt-1"
                  onChange={(e) => { setcourse_start_date(e.target.value) }}
                />
              </div>
            </div>

            {/* Pc_laptop */}
            <div className="form-group mt-3 d-flex gap-3 col-5">
              <label className="col-4 ">PC & Laptop :</label>
              <select id="pc_laptop" className="form-control" onChange={(e) => { setpc_laptop(e.target.value) }}>
                <option value="PC" >PC</option>
                <option value="Laptop">Laptop</option>
              </select>
            </div>

            {/* Your Faculty */}
            <div className="form-group mt-3 d-flex gap-3 col-5">
              <label className="col-4 ">Faculty Name :</label>
              <select id="pc_laptop" className="form-control">
                {
                  data.map = (user, index) => {
                    return <div className="col-4 ">
                      <div class="card w-75 m-1" >
                        <ul class="list-group list-group-flush"> 
                          <option value={user.faculty_name}>{user.faculty_name}</option>                      
                        </ul>
                      </div>
                    </div>
                  }
                }
              </select>
            </div>

            <div className="d-grid gap-2 mt-3 col-2">
              <Link to="/home" onClick={btnsubmit} className='submit'>
                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
              </Link>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}




export default Admission;