import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "../src/components/Login";
import Forgetpassword from "../src/components/Forgetpassword";
import AddCourse from './components/Addcourse';
import Admin from './components/Admin';
import View_course from './components/View';
import Dashboard from './components/Dashboard';
import Admission from './components/Admission';
import ViewStudent from './components/ViewStudent';
import Updatestudent from './components/Updatestudent';
import AddFaculty from './components/Addfaculty';
import ViewFaculty from './components/Viewfaculty';
import Sidebar  from './components/Sidebar';
import ViewStudent1 from './components/ViewStudent1';
import Add_content from './components/AddContent';
function App() { 
  return (
    <div className="App">
      <div className="main">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Sidebar />}></Route>

          {/* login  */}
          <Route path='/signup' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/forgetpassword' element={<Forgetpassword />}></Route>

          {/* courses  */}
          <Route path='/addcourse' element={<AddCourse />}></Route>
          <Route path='/view_course' element={<View_course />}></Route>
          <Route path='/add_content' element={<Add_content />}></Route>


          <Route path='/admin' element={<Admin />}></Route>

          {/* student  */}
          <Route path='/view_student' element={<ViewStudent />}></Route>
          <Route path='/view_student/:id' element={<ViewStudent1 />}></Route>
          <Route path='/update_student/:id' element={<Updatestudent />}></Route>
          <Route path='/admission' element={<Admission />}></Route>
          

          {/* Faculty */}
          <Route path='/addfaculty' element={<AddFaculty/>}></Route>
          <Route path='/view_faculty' element={<ViewFaculty/>}></Route>

        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;