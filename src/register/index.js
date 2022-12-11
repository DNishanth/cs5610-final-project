
import {Link} from "react-router-dom";
import "./index.css";

const RegisterComponent = () => 
<div>
    <a href="/home" className="wd-corner-logo">
        <h2 className="wd-register-header mb-3">Athenaeum</h2>
    </a>
    <a href="/login">
        <h5>
            <i class="fa-solid fa-arrow-left me-2"></i>
            Back to Login
        </h5>
    </a>
    <div className="wd-register-header mt-2" align="center">
        <h1>Create your Athenaeum Account</h1>
    </div>
    <div align="center">        
        <label htmlFor="firstName" className="form-label mt-3">First Name</label>
        <input type="text" className="form-control w-25" id="firstName" placeholder="Enter your first name"></input>
        <label htmlFor="lastName" className="form-label mt-3">Last Name</label>
        <input type="text" className="form-control w-25" id="lastName" placeholder="Enter your last name"></input>
        <label htmlFor="username" className="form-label mt-3">Username</label>
        <input type="text" className="form-control w-25" id="username" placeholder="Enter your username"></input>
        <label htmlFor="password" className="form-label mt-3">Password</label>
        <input type="text" className="form-control w-25" id="password" placeholder="Enter your password"></input>
        <label htmlFor="phone" className="form-label mt-3">Phone</label>
        <input type="text" className="form-control w-25" id="phone" placeholder="Enter your phone number"></input>
        <label htmlFor="email" className="form-label mt-3">Email</label>
        <input type="text" className="form-control w-25 mb-5" id="email" placeholder="Enter your email"></input>
        {/* if filled out correctly - created user and goes to logged-in home page */}
        {/* If not filled out correctly - error message to user and stay on register page, don't create user */}
        <Link to="/home" className="wd-register-button mt-5" >Register</Link>
    </div>
</div>


export default RegisterComponent;