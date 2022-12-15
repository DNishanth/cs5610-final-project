import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findBookByWorkIDThunk} from "../services/open-library-thunks";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {postReviewThunk, getReviewsByWorkIDThunk} from "./review-thunks";

const DetailsComponent = () => {
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
            <ul className="list-group">
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
        </div>
    )}
export default DetailsComponent;

