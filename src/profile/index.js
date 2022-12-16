import {useDispatch, useSelector} from "react-redux";
import SearchBarComponent from "../search";
import "./index.css";
import {Link} from "react-router-dom";
import {logoutThunk} from "../login/user-thunks";
import {useEffect} from "react";
import {getReviewsByUserIDThunk} from "../details/review-thunks";
import {getFollowersByUserIDThunk, getFollowingByUserIDThunk} from "./follows-thunks";

const ProfileComponent = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users);
    const {followers, following} = useSelector((state) => state.follows);
    const {user_reviews} = useSelector((state) => state.reviews);
    useEffect(() => {
        dispatch(getReviewsByUserIDThunk(currentUser._id));
        dispatch(getFollowersByUserIDThunk(currentUser._id));
        dispatch(getFollowingByUserIDThunk(currentUser._id));
        // dispatch(getFollowersByUserIDThunk(currentUser._id));
    }, []);
    console.log(currentUser)
    return (
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-5 d-flex justify-content-start">
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
                            <a href="/home" className="nav-link" onClick={() => dispatch(logoutThunk())}>Logout</a>
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

                <ul className="list-group wd-reviews-list">
                    <div>You are following:</div>
                    {following && following.map(follow => (
                        <li key={follow._id} className="list-group-item wd-profile-reviews">
                            <div>{follow.followed.username}</div>
                            <Link to={"/profile/" + follow.followed._id} className="wd-review-link">
                                View profile <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                        </li>
                    ))}
                </ul>
                <br/><br/>
                <ul className="list-group wd-reviews-list">
                    <div>Your followers:</div>
                    {followers && followers.map(follow => (
                        <li key={follow._id} className="list-group-item wd-profile-reviews">
                            <div>{follow.follower.username}</div>
                            <Link to={"/profile/" + follow.follower._id} className="wd-review-link">
                                View profile <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                        </li>
                    ))}
                </ul>
                <br/><br/>
                <ul className="list-group wd-reviews-list">
                    <div>Your reviews:</div><br/>
                    {user_reviews && user_reviews.slice(0, 5).map(review => (
                        <li key={review._id} className="list-group-item wd-profile-reviews">
                            <div>{review.reviewText}</div>
                            <Link to={"/details/" + review.workID} className="wd-review-link">
                                Go to review <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ProfileComponent;