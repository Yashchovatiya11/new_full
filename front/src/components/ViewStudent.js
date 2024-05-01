import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ViewStudent() {

  const [data, setData] = useState([]);

console.log(data,"data")
  // const [ddata, setdData] = useState('');

  useEffect(() => {

    axios.get('http://localhost:5000/student')
      .then(res => setData(res.data.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, []);


  var handledelete = (id, e) => {


    axios.delete(`http://localhost:5000/student/delete/`+id)
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
          <h3 className='pt-3 text-center fw-bold mx-auto'> Student Data </h3>
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
                {/* <th>Image</th> */}
                <th>Name</th>
                <th>Surname</th>
                {/* <th>FaherName</th>
                <th>Dob.</th>
                <th>Gender</th> */}
                <th>Mobile No.</th>
                {/* <th>Wp No.</th>
                <th>Father No.</th>
                <th>Address</th>
                <th>Qualification</th> */}
                <th>Course name</th>
                {/* <th>Course Start Date</th> */}
                {/* <th>PC / Laptop</th> */}
              </tr>
            </thead>
            <tbody>
              {
                data?.map((user, index) => {

                  return <tr>
                    {/* <td><img src={user.image} /></td> */}

                    <td>{user.name}</td>
                   <td>{user.surname}</td>
                    {/* <td>{user.lastname}</td>
                    <td>{user.dob}</td>
                    <td>{user.gender}</td> */}
                    <td>{user.contact_number}</td>
                    {/* <td>{user.whatsapp_number}</td>
                    <td>{user.father_contactnumber}</td> */}
                    {/* <td>{user.adress}</td> */}
                    {/* <td>{user.qualification}</td> */}
                    <td>{user.course_name}</td>
                    {/* <td>{user.course_start_date}</td> */}
                    {/* <td>{user.pc_laptop}</td>  */}
                    <td><Link to={`/view_student/${user._id}`}><Button>ViewStudent</Button></Link></td>
                    <td><Link to={`/update_student/${user._id}`}><Button>Update</Button></Link></td>
                    <td><Button onClick={(e) => handledelete(user._id, e)}>Delete</Button></td>
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

export default ViewStudent;