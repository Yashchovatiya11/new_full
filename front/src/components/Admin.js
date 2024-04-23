import './Css/Home.css'
import React, { useState } from 'react'
import { Form, Button, Collapse } from 'react-bootstrap'
import { FaTachometerAlt } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { PiStudentBold } from "react-icons/pi";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { RiAdminFill } from "react-icons/ri";

function Admin() {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='ms-5 fw-bold'><RiAdminFill className='me-3' /> Welcome Admin</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow} className='btn-light fw-bold'>
              Access
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <div className="photo ">
        <h2 className='pt-5'>Welcome Admin Page </h2>
        <div className='colo'>
          <Button className='switch' onClick={handleShow}>
            Admin
          </Button>
        </div>
      </div> */}

      <Offcanvas show={show} onHide={handleClose}  >
        <div>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin Control</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <div>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls='example-collapse-text'
                aria-expanded={open} className='text-start btn w-100' >

                <span className='fw-bold'><FaTachometerAlt className='me-3 fs-5'></FaTachometerAlt>Courses<MdOutlineKeyboardArrowDown className='ms-2'></MdOutlineKeyboardArrowDown></span>
              </Button>
              <Collapse in={open} className='pt-2 ps-4 '>
                <ul id='example-collapse-text' className='list-unstyled ps-0 text-start '>
                  <li className=' mt-2 rounded p-2 '><Link to="/addcourse" className=''><BsCircle className='me-3 fs-6'></BsCircle>Add Courses</Link></li>
                  <li className=' mt-2 rounded p-2'><Link to="/view_course" className=''><BsCircle className='me-3 fs-6'></BsCircle>View Courses</Link></li>
                </ul>
              </Collapse>
            </div>

            <div className='mt-2'>
              <Button
                onClick={() => setOpen1(!open1)}
                aria-controls='example-collapse-text'
                aria-expanded={open1} className='text-start btn w-100' >

                <span className='fw-bold'><PiStudentBold className='me-3 fs-5'></PiStudentBold> Student<MdOutlineKeyboardArrowDown className='ms-2'></MdOutlineKeyboardArrowDown></span>
              </Button>
              <Collapse in={open1} className='pt-2 ps-4 '>
                <ul id='example-collapse-text' className='list-unstyled ps-0 text-start '>
                  <Link to="/Admission" className=''><li className=' mt-2 rounded p-2 '><BsCircle className='me-3 fs-6'></BsCircle>Admission</li></Link>
                  <Link to="/view_student" className=''><li className=' mt-2 rounded p-2'><BsCircle className='me-3 fs-6'></BsCircle>View Student Records</li></Link>
                </ul>
              </Collapse>
            </div>

            <div className='mt-2'>
              <Button
                onClick={() => setOpen2(!open2)}
                aria-controls='example-collapse-text'
                aria-expanded={open2} className='text-start btn w-100' >

                <span className='fw-bold'><FaTachometerAlt className='me-3 fs-5'></FaTachometerAlt>Faculty<MdOutlineKeyboardArrowDown className='ms-2'></MdOutlineKeyboardArrowDown></span>
              </Button>
              <Collapse in={open2} className='pt-2 ps-4 '>
                <ul id='example-collapse-text' className='list-unstyled ps-0 text-start '>
                  <li className=' mt-2 rounded p-2 '><Link to="/addfaculty" className=''><BsCircle className='me-3 fs-6'></BsCircle>Add Faculty</Link></li>
                  <li className=' mt-2 rounded p-2'><Link to="/view_faculty" className=''><BsCircle className='me-3 fs-6'></BsCircle>View Faculty</Link></li>
                </ul>
              </Collapse>
            </div>


          </Offcanvas.Body>

          <Offcanvas.Body >

            <div className='mt-2 w-50 dasboard_btn'>
              <Link to="/home">
                <Button className='text-start btn btn-dark w-100 text-center' >
                  <span className='fw-bold'>Dashboard</span>
                </Button>
              </Link>
            </div>

          </Offcanvas.Body>
        </div>
      </Offcanvas>

    </>
  )
}
export default Admin;