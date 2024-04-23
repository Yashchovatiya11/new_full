import React, { useState } from 'react';
import { Form, Button, Collapse } from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai";
import { FaTachometerAlt, FaFile } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import './Css/Sidebar.css'

export const Sidebar = () => {

    const [open, setOpen] = useState(false);
    // const [open1, setOpen1] = useState(false); 
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    // const [open5, setOpen5] = useState(false);
    return (
        <>
            <Dashboard />
            <div className='sidebar_scroll '>
                <ul className='bgcolorsidebar list-unstyled'>
                    {/* ------------Logo-------------- */}
                    <li className='border-bottom pt-2 pb-2'>
                        <img src={require('../image/AdminLTELogo.png')} width='30px' /><span> <Link to='/dashboard'>A1 Teaching</Link></span>
                    </li>

                    {/* ------------search------------- */}
                    <li className='p-2'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search outline-secondary"
                                placeholder="Search"
                                className=""
                                aria-label="Search" />
                            <Button className='bg-dark'><AiOutlineSearch className='text-white fs-4 fw-bold '></AiOutlineSearch></Button>
                        </Form>
                    </li>
                    {/* ------------Dashboard------------- */}


                    <li>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls='example-collapse-text'
                            aria-expanded={open} className='text-start btn1'>

                            <span className=''><FaTachometerAlt className='me-3 fs-5'></FaTachometerAlt>Dashboard <MdOutlineKeyboardArrowDown className=''></MdOutlineKeyboardArrowDown></span>
                        </Button>
                        <Collapse in={open}>
                            <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                                <li><Link><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v1</Link></li>
                                <li><Link><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v2</Link></li>
                                <li><Link><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v3</Link></li>
                            </ul>
                        </Collapse>
                    </li>

                    <li>
                        <Button
                            onClick={() => setOpen2(!open2)}
                            variant="outline-secondary"
                            aria-controls='example-collapse-text'
                            aria-expanded={open2} className='text-start colorlayout btn1'>

                            <span className=''><FaFile className='me-3 fs-5'></FaFile>Student<MdOutlineKeyboardArrowDown className=''></MdOutlineKeyboardArrowDown></span>
                        </Button>
                        <Collapse in={open2}>
                            <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                                <li><Link to='/Admission'><BsCircle className='me-3 fs-6'></BsCircle>Admission</Link></li>
                                <li><Link to='/view_student'><BsCircle className='me-3 fs-6'></BsCircle>View Student</Link></li>
                            </ul>
                        </Collapse>
                    </li>

                    <li>
                        <Button
                            onClick={() => setOpen3(!open3)}
                            variant="outline-secondary"
                            aria-controls='example-collapse-text'
                            aria-expanded={open3} className='text-start colorlayout btn1'>

                            <span className=''><FaFile className='me-3 fs-5'></FaFile>Faculty<MdOutlineKeyboardArrowDown className=''></MdOutlineKeyboardArrowDown></span>
                        </Button>
                        <Collapse in={open3}>
                            <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                                <li><Link to='/view_faculty'><BsCircle className='me-3 fs-6'></BsCircle>View Faculty</Link></li>
                            </ul>
                        </Collapse>
                    </li>

                    <li>
                        <Button
                            onClick={() => setOpen4(!open4)}
                            variant="outline-secondary"
                            aria-controls='example-collapse-text'
                            aria-expanded={open4} className='text-start colorlayout btn1'>

                            <span className=''><FaFile className='me-3 fs-5'></FaFile>Courses<MdOutlineKeyboardArrowDown className=''></MdOutlineKeyboardArrowDown></span>
                        </Button>
                        <Collapse in={open4}>
                            <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                                <li><Link to='/view_course'><BsCircle className='me-3 fs-6'></BsCircle>View Course</Link></li>
                            </ul>
                        </Collapse>
                    </li>





                </ul>
            </div>
        </>
    );
};


export default Sidebar;