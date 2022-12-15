import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findBookByWorkIDThunk} from "../services/open-library-thunks";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {postReviewThunk, getReviewsByWorkIDThunk} from "./review-thunks";
import './index.css'


const DetailsComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    const {pathname} = useLocation();
    const workID = pathname.split('/')[2];
    const {bookDetails} = useSelector((state) => state.details);
    const {reviews, error} = useSelector((state) => state.reviews);
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
        }
    }

    return (
        <div>
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
                <label htmlFor="wd-review-input">Write a review</label>
                <textarea className="form-control" id="wd-review-input" rows="4"
                          onChange={(e) => setReviewText(e.target.value)}>
                </textarea>
                {/*TODO: add text/current user*/}
            </div>
            <button type="button" className="btn btn-success"
                    onClick={postReviewHandler}>
                Post
            </button>
            <br/><br/><br/>
            <p>Past Reviews:</p>
            <div className="wd-review-box">
                {/*TODO: Is reviews true check needed? add key*/}
                {reviews && reviews.map(review => (
                    <li key={review._id} className="list-group-item">
                        <span>
                            <div>
                                <Link to={"/profile/" + review.reviewer} className="wd-review-username">
                                    <b>{currentUser.username}</b>:
                                </Link>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            {review.reviewText}
                            <hr></hr>
                        </span>
                    </li>
                ))}
            </div>
        </div>
    )}
export default DetailsComponent;

