import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findBookByWorkIDThunk} from "../services/open-library-thunks";
import {useEffect} from "react";

const DetailsComponent = () => {
    const {pathname} = useLocation();
    const workID = pathname.split('/')[2];
    const {bookDetails} = useSelector((state) => state.details);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findBookByWorkIDThunk(workID));
    }, [workID]);
    console.log(bookDetails); // TODO: Why does this print multiple times?
    return (
        <div>
            <h1>Details</h1>
            {
                bookDetails.length !== 0 &&
                <div>
                    {bookDetails.title}
                    <br/>
                    <img src={"https://covers.openlibrary.org/b/id/" + bookDetails.covers[0] + "-L.jpg"}/>
                    <br/>
                    {bookDetails.description.value}
                </div>
            }
            Create and display reviews here
        </div>
    )}
export default DetailsComponent;

