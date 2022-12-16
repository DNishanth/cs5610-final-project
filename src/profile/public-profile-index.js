import {useDispatch, useSelector} from "react-redux";
import SearchBarComponent from "../search";
import "./index.css";
import {Link} from "react-router-dom";
import {logoutThunk, publicProfileThunk} from "../login/user-thunks";

import {useLocation, useParams} from "react-router";
import {useEffect} from "react";

const PublicProfileComponent = () => {
  const {pathname} = useLocation()
  const param = pathname.split('/')
  const uid = param[param.length-1]
  const {publicProfile} = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(publicProfileThunk(uid))
    console.log(uid,"\n",publicProfile);
  }, [uid])
  return (
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-5 justify-content-start">
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
                <a href="/profile" className="nav-link">Profile</a>
              </li>

            </ul>
          </div>
          <div className="col-5 mt-1 wd-searchbar" align="center">
            <SearchBarComponent/>
          </div>
          <div className="col-2">
            <ul className="nav nav-pills mb-2 mt-2 ms-3">
              <li className="nav-item">
                <a href="/home" className="nav-link" onClick={() => dispatch(logoutThunk())}>Logout</a>
              </li>
            </ul>
          </div>
        </div>

        { publicProfile &&
          <div className="col-auto ms-4" align="center">
            <h2 className="wd-profile-header">{publicProfile.username}'s
              Profile</h2>
            {/*Example list to show current user fields*/}
            {publicProfile &&
                <div>
                  <label htmlFor="firstName" className="form-label mt-3 ">First
                    Name:</label>
                  <input type="text" className="form-control w-auto"
                         id="firstName" value={publicProfile.firstName}></input>
                  <br/>
                  <label htmlFor="lastName" className="form-label mt-3 ">Last
                    Name:</label>
                  <input type="text" className="form-control w-auto"
                         id="lastName" value={publicProfile.lastName}></input>
                  <br/>
                  <label htmlFor="username"
                         className="form-label mt-3 ">Username:</label>
                  <input type="text" className="form-control w-auto"
                         id="username" value={publicProfile.username}></input>
                  <br/>
                  <br/>
                </div>}
            <button className="wd-logout-button"
                    onClick={() => dispatch(logoutThunk())}>Logout
            </button>
            <br/><br/>
          </div>
        }
      </div>
  )
}
export default PublicProfileComponent;