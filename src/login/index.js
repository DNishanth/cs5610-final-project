import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerThunk} from "./user-thunks";

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
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username"
                onChange={(e) => setUsername(e.target.value)}></input>

            <label htmlFor="password" className="form-label">Password</label>
            <input type="text" className="form-control" id="password"
                   onChange={(e) => setPassword(e.target.value)}></input>

            <button onClick={loginUser}>Login</button>
            <button onClick={registerUser}>Register</button>
        </div>
    )
}

export default LoginComponent;