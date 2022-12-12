import {useSelector} from "react-redux";
import SearchBarComponent from "../search";
import "./index.css";
import {Link, Navigate} from "react-router-dom";

const ProfileComponent = () => {
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
                            <Link to={"/home"}>
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
            <div>
                {/*Example list to show current user fields*/}
                {currentUser &&
                <div>
                    {currentUser.username}
                    <br/>
                    {currentUser.password}
                    <br/>
                    {currentUser.firstName}
                    <br/>
                    {currentUser.lastName}
                    <br/>
                    {currentUser.phone}
                    <br/>
                    {currentUser.email}
                    <br/>
                    {currentUser.role}
                </div>}
            </div>
        </div>
    )
}
export default ProfileComponent;