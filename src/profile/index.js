import {useDispatch, useSelector} from "react-redux";
import SearchBarComponent from "../search";
import "./index.css";
import {Link} from "react-router-dom";
import {logoutThunk} from "../login/user-thunks";

const ProfileComponent = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users);
    console.log(currentUser)
    return (
        <div className="wd-profile-page">
            <div className="row">
                <div className="col-6">
                    <ul className="nav nav-pills mb-2 mt-2 ms-2">
                        <h2 className="nav-item" style={{marginTop:"-11px"}}>
                            <a href="/home" className="nav-link">Athenaeum</a>
                        </h2>
                        <li className="nav-item nav-link">
                            <Link to={"/home"} style={{textDecoration: 'none'}}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/search" className="nav-link ">Search</a>
                        </li>
                        <li className="nav-item">
                            <a href="/profile" className="nav-link active">Profile</a>
                        </li>

                    </ul>
                </div>
                <div className="col-5 mt-1 wd-searchbar" align="center">
                    <SearchBarComponent/>
                </div>
                <div className="col-2">
                    <ul className="nav nav-pills mb-2 mt-2 ms-3">
                        <li className="nav-item">
                            <a href="/register" className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/register" className="nav-link">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-auto ms-4" align="center">
                <h2 className="wd-profile-header">Your Athenaeum Profile</h2>
                {/*Example list to show current user fields*/}
                {currentUser &&
                <div>
                    <label htmlFor="firstName" className="form-label mt-3 ">Your First Name:</label>
                    <input type="text" className="form-control w-auto" id="firstName" value={currentUser.firstName}></input>
                    <br/>
                    <label htmlFor="lastName" className="form-label mt-3 ">Your Last Name:</label>
                    <input type="text" className="form-control w-auto" id="lastName" value={currentUser.lastName}></input>
                    <br/>
                    <label htmlFor="username" className="form-label mt-3 ">Your Username:</label>
                    <input type="text" className="form-control w-auto" id="username" value={currentUser.username}></input>
                    <br/>
                    <label htmlFor="password" className="form-label mt-3 ">Your Password:</label>
                    <input type="text" className="form-control w-auto" id="password" value={currentUser.password}></input>
                    <br/>
                    <label htmlFor="phone" className="form-label mt-3 ">Your Phone:</label>
                    <input type="text" className="form-control w-auto" id="phone" value={currentUser.phone}></input>
                    <br/>
                    <label htmlFor="email" className="form-label mt-3 ">Your Email:</label>
                    <input type="text" className="form-control w-auto" id="email" value={currentUser.email}></input>
                    <br/>
                    <label htmlFor="role" className="form-label mt-3 ">Role:</label>
                    <input type="text" className="form-control w-auto" id="role" value={currentUser.role}></input>
                    <br/>
                    <br/>
                </div>}
                <button className="wd-logout-button" onClick={() => dispatch(logoutThunk())}>Logout</button>
                <br/><br/>
            </div>
        </div>
    )
}
export default ProfileComponent;