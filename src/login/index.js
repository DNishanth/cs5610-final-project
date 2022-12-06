import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerThunk} from "./user-thunks";
import "./index.css";

const LoginComponent = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    const loginUser = () => {

    }
    const registerUser = () => {
        console.log(username);
        console.log(password);
        dispatch(registerThunk({username, password}));
    }
    return (
        <div>
            <h5>
                <i class="fa-solid fa-arrow-left me-2"></i>
                Back to Home
            </h5>
            <div align="center">
                <h1 className="mb-5">Login</h1>
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control w-25" id="username" placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}></input>

                <label htmlFor="password" className="form-label mt-3">Password</label>
                <input type="text" className="form-control w-25" id="password" placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}></input>

                    <button className="wd-login-button mt-5 mb-3" onClick={loginUser}>Login</button>
                    <br/>
                    <p className="mt-4">Don't have an account?</p>
                    <button className="wd-register-button" onClick={registerUser}>Register</button>
            </div>
        </div>
    )
}

export default LoginComponent;