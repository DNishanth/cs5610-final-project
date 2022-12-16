import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findBookByWorkIDThunk} from "../services/open-library-thunks";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {postReviewThunk, getReviewsByWorkIDThunk, deleteReviewThunk} from "./review-thunks";
import './index.css'
import { current } from "@reduxjs/toolkit";
import {logoutThunk} from "../login/user-thunks";
import SearchBarComponent from "../search";



const ReaderDetailsComponent = () => {
    const {pathname} = useLocation();
    const workID = pathname.split('/')[2];
    const {bookDetails} = useSelector((state) => state.details);
    const {reviews, error} = useSelector((state) => state.reviews);
    const {currentUser} = useSelector((state) => state.users);
    const [reviewText, setReviewText] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findBookByWorkIDThunk(workID));
        dispatch(getReviewsByWorkIDThunk(workID));
    }, []);
    // TODO: check deps needed, most likely empty if this runs once

    const postReviewHandler = () => {
        if (reviewText.trim()) {
            dispatch(postReviewThunk({workID, reviewText}));
            dispatch(getReviewsByWorkIDThunk(workID));
        }
    }
    // TODO: if doesnt work try refresh page

    function formatRole(role) {
        const lower = role.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div>
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
                            <a href="/home" className="nav-link" onClick={() => dispatch(logoutThunk())}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/*TODO: Extra: Link back to search results, maybe use state to keep search term?*/}
            <Link to={"/search"}>
                <i className="fa-solid fa-lg fa-arrow-left"></i>
            </Link>
            <h1>Details</h1>
            {
                bookDetails.length !== 0 &&
                <div>
                     {bookDetails.title}
                     <br/>
                     {("covers" in bookDetails) &&
                         <img src={"https://covers.openlibrary.org/b/id/" + bookDetails.covers[0] + "-L.jpg"}/>}
                     <br/>

                    {typeof bookDetails['description'] === 'string' ? <div>{bookDetails['description']}</div> :
                        <div>{bookDetails.description.value}</div>}
                </div>
            }
            <br/>
            {error && <div>{error}</div>}
            {/*TODO: make showing the error a toast/notification?*/}
            <div className="form-group">
                <label htmlFor="wd-review-input">Write a review:</label>
                <textarea className="form-control" id="wd-review-input" rows="4"
                          onChange={(e) => setReviewText(e.target.value)}>
                </textarea>
                {/*TODO: add text/current user*/}
            </div>
            <button type="button" className="btn btn-success"
                    onClick={postReviewHandler}>
                Post
            </button>
            <br/><br/>
            <ul className="list-group">
                <p>Past Reviews:</p>
                {/*TODO: Is reviews true check needed? add key*/}
                {reviews && reviews.map(review => (
                    <li key={review._id} className="list-group-item">
                        <Link to={"/profile/" + review.reviewer._id}>
                            {review.reviewer.firstName}
                        </Link>
                        <div className="float-end">{formatRole(review.reviewer.role)}</div>
                        <div>{review.reviewText}</div>
                        {review.reviewer.role === "MODERATOR" &&
                            <i className="fa fa-trash float-end" aria-hidden="true"
                               onClick={() => {dispatch(deleteReviewThunk(review._id))}}></i>
                        }
                    </li>
                ))}
            </ul>
            <br/><br/>
            <ul className="list-group">
                <p>Past Book Discussions:</p>
            </ul>
            <br/><br/>
            <ul className="list-group">
                <p>Moderators' Notes:</p>
            </ul>
        </div>
    )}


    const AuthorDetailsComponent = () => {
        const {pathname} = useLocation();
        const workID = pathname.split('/')[2];
        const {bookDetails} = useSelector((state) => state.details);
        const {reviews, error} = useSelector((state) => state.reviews);
        const {currentUser} = useSelector((state) => state.users);
        const [reviewText, setReviewText] = useState();
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(findBookByWorkIDThunk(workID));
            dispatch(getReviewsByWorkIDThunk(workID));
        }, []);
        // TODO: check deps needed, most likely empty if this runs once
    
        const postReviewHandler = () => {
            if (reviewText.trim()) {
                dispatch(postReviewThunk({workID, reviewText}));
                dispatch(getReviewsByWorkIDThunk(workID));
            }
        }
    
        function formatRole(role) {
            const lower = role.toLowerCase()
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
    
        return (
            <div>
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
                                <a href="/home" className="nav-link" onClick={() => dispatch(logoutThunk())}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*TODO: Extra: Link back to search results, maybe use state to keep search term?*/}
                <Link to={"/search"}>
                    <i className="fa-solid fa-lg fa-arrow-left"></i>
                </Link>
                <h1>Details</h1>
                {
                    bookDetails.length !== 0 &&
                    <div>
                         {bookDetails.title}
                         <br/>
                         {("covers" in bookDetails) &&
                             <img src={"https://covers.openlibrary.org/b/id/" + bookDetails.covers[0] + "-L.jpg"}/>}
                         <br/>
    
                        {typeof bookDetails['description'] === 'string' ? <div>{bookDetails['description']}</div> :
                            <div>{bookDetails.description.value}</div>}
                    </div>
                }
                <br/>
                {error && <div>{error}</div>}
                {/*TODO: make showing the error a toast/notification?*/}
                <div className="form-group">
                    <label htmlFor="wd-review-input">Start your book discussion:</label>
                    <textarea className="form-control" id="wd-review-input" rows="4"
                              onChange={(e) => setReviewText(e.target.value)}>
                    </textarea>
                    {/*TODO: add text/current user*/}
                </div>
                <button type="button" className="btn btn-success"
                        onClick={postReviewHandler}>
                    Post
                </button>
                <br/><br/>
                <ul className="list-group">
                    <p>Past Book Discussions:</p>

                </ul>
                <br/><br/>
                <ul className="list-group">
                    <p>Past Reviews:</p>
                    {/*TODO: Is reviews true check needed? add key*/}
                    {reviews && reviews.map(review => (
                        <li key={review._id} className="list-group-item">
                            <Link to={"/profile/" + review.reviewer._id}>
                                {review.reviewer.firstName}
                            </Link>
                            <div className={"float-end"}>{formatRole(review.reviewer.role)}</div>
                            <div>{review.reviewText}</div>
                        </li>
                    ))}
                </ul>
                <br/><br/>
                <ul className="list-group">
                    <p>Moderators' Notes</p>
                </ul>
            </div>
        )}

const ModeratorDetailsComponent = () => {
    const {pathname} = useLocation();
    const workID = pathname.split('/')[2];
    const {bookDetails} = useSelector((state) => state.details);
    const {reviews, error} = useSelector((state) => state.reviews);
    const {currentUser} = useSelector((state) => state.users);
    const [reviewText, setReviewText] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findBookByWorkIDThunk(workID));
        dispatch(getReviewsByWorkIDThunk(workID));
    }, []);
    // TODO: check deps needed, most likely empty if this runs once
        
    const deleteReviewHandler = () => {
        if (reviewText.trim()) {
            dispatch(deleteReviewThunk({workID}));
        }
    }
        
    function formatRole(role) {
            const lower = role.toLowerCase()
            return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
        
    return (
        <div>
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
                            <a href="/home" className="nav-link" onClick={() => dispatch(logoutThunk())}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/*TODO: Extra: Link back to search results, maybe use state to keep search term?*/}
            <Link to={"/search"}>
                <i className="fa-solid fa-lg fa-arrow-left"></i>
            </Link>
            <h1>Details</h1>
            {
                bookDetails.length !== 0 &&
                <div>
                    {bookDetails.title}
                    <br/>
                    {("covers" in bookDetails) &&
                        <img src={"https://covers.openlibrary.org/b/id/" + bookDetails.covers[0] + "-L.jpg"}/>}
                    <br/>
                    {typeof bookDetails['description'] === 'string' ? <div>{bookDetails['description']}</div> :
                    <div>{bookDetails.description.value}</div>}
                </div>
            }
            {error && <div>{error}</div>}
            <br/><br/>
            <ul className="list-group">
                <p>Past Reviews:</p>
                {/*TODO: Is reviews true check needed? add key*/}
                {reviews && reviews.map(review => (
                    <li key={review._id} className="list-group-item">
                        <Link to={"/profile/" + review.reviewer._id}>
                            {review.reviewer.firstName}
                        </Link>
                        <div className={"float-end"}>{formatRole(review.reviewer.role)}</div>
                        <div>{review.reviewText}</div>
                        <button className="wd-mod-delete-button" onClick={() => dispatch(deleteReviewHandler())}>Delete</button>
                    </li>
                ))}
            </ul>
            <br/><br/>
            <ul className="list-group">
                <p>Past Book Discussions:</p>
            </ul>
            <br/><br/>
        </div>
    )}

const LoggedOutDetailsComponent = () => {
    const {pathname} = useLocation();
    const workID = pathname.split('/')[2];
    const {bookDetails} = useSelector((state) => state.details);
    const {reviews, error} = useSelector((state) => state.reviews);
    const {currentUser} = useSelector((state) => state.users);
    const [reviewText, setReviewText] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findBookByWorkIDThunk(workID));
        dispatch(getReviewsByWorkIDThunk(workID));
    }, []);
    // TODO: check deps needed, most likely empty if this runs once
            
    const postReviewHandler = () => {
        if (reviewText.trim()) {
            dispatch(postReviewThunk({workID, reviewText}));
            dispatch(getReviewsByWorkIDThunk(workID));
        }
    }
            
    function formatRole(role) {
        const lower = role.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
            
    return (
        <div>
            <div className="row d-flex justify-content-between">
                <div className="col-6">
                    <ul className="nav nav-pills mb-2 mt-2 ms-2">
                        <h2 className="nav-item" style={{marginTop:"-11px"}}>
                            <a href="/home" className="nav-link">Athenaeum</a>
                        </h2>
                        <li className="nav-item">
                            <a href="/home" className="nav-link ">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/search" className="nav-link active">Search</a>
                        </li>
                        <li className="nav-item">
                            <a href="/profile" className="nav-link">Profile</a>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul className="nav nav-pills mb-2 mt-2 ms-5">
                        <li className="nav-item">
                            <a href="/login" className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/register" className="nav-link">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/*TODO: Extra: Link back to search results, maybe use state to keep search term?*/}
            <Link to={"/search"}>
                <i className="fa-solid fa-lg fa-arrow-left"></i>
            </Link>
            <h1>Details</h1>
            {
                bookDetails.length !== 0 &&
                    <div>
                        {bookDetails.title}
                        <br/>
                        {("covers" in bookDetails) &&
                            <img src={"https://covers.openlibrary.org/b/id/" + bookDetails.covers[0] + "-L.jpg"}/>}
                        <br/>
            
                        {typeof bookDetails['description'] === 'string' ? <div>{bookDetails['description']}</div> :
                            <div>{bookDetails.description.value}</div>}
                    </div>
            }
            <br/>
            {error && <div>{error}</div>}
            <br/><br/>
            <ul className="list-group">
                <p>Past Book Discussions:</p>
            </ul>
            <br/><br/>
            <ul className="list-group">
                <p>Past Reviews:</p>
                {/*TODO: Is reviews true check needed? add key*/}
                {reviews && reviews.map(review => (
                    <li key={review._id} className="list-group-item">
                        <Link to={"/profile/" + review.reviewer._id}>
                            {review.reviewer.firstName}
                        </Link>
                        <div className={"float-end"}>{formatRole(review.reviewer.role)}</div>
                        <div>{review.reviewText}</div>
                    </li>
                ))}
            </ul>
            <br/><br/>
            <ul className="list-group">
                <p>Moderators' Notes:</p>
            </ul>
        </div>
    )}

const DetailsComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    if (!currentUser) {
        return <LoggedOutDetailsComponent/>
    } else if (currentUser.role === 'READER') {
        return <ReaderDetailsComponent/>
    } else if (currentUser.role === 'AUTHOR') {
        return <AuthorDetailsComponent/>
    } else if (currentUser.role === 'MODERATOR') {
        return <ModeratorDetailsComponent/>
    }
}
    
export default DetailsComponent;

