import '../components/Css/Addcourse.css';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function Add_content() {

    let [c_name, setc_name] = useState('');
    let [course_id, setcourse_id] = useState('');
    let [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/course/')
            .then(res => setData(res.data.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, []);

    const btnhandler = () => {
        axios.post('http://localhost:5000/course_content/add_content', {
            content: c_name,
            course_id: course_id,
            error: error
        }).then(function (response) {
            // handle success
            console.log(response);

            if (response.data.status === "succesfully added") {
                Navigate("/home")
            }

            else {
                setError(response.data.status);
                alert("please enter your course");
            }

            if (response.data.status === " ") {
                setError(response.data);
                alert("please enter your course and fees");
            }

            if (response.data.status === "check your data") {
                setError(response.data.status);
                alert("check your data");
            }

            if (response.data.status === "check your data") {
                setError(response.data.status);
                alert("check your data");
            }
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (

        <>
            <div className='add'>
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">

                            <h3 className="Auth-form-title">Add Content</h3>

                            <div className="form-group mt-3">
                                <label>Add Content</label>
                                <input
                                    type="text"
                                    onChange={(e) => { setc_name(e.target.value) }}
                                    className="form-control mt-1"
                                    placeholder="text your course"
                                />

                                {/* <input
                                    type="text"
                                    onChange={(e) => { setc_name(e.target.value) }}
                                    className="form-control mt-1"
                                    placeholder="text your course"
                                /> */}

                                <select id="course" className="form-control mt-3" onChange={(e) => { setcourse_id(e.target.value) }}>
                                    {
                                        data?.map((user, index) => {

                                            return  <option value="None">{user.c_name}</option>
                                        })
                                    }
                                </select>
                            </div>


                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" >
                                    <Link to="/admin" onClick={btnhandler} className='submit'>Submit</Link>
                                </button>


                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Add_content;