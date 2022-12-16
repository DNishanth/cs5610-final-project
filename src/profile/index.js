import {useDispatch, useSelector} from "react-redux";
import SearchBarComponent from "../search";
import "./index.css";
import {Link} from "react-router-dom";
import {logoutThunk, updateProfileThunk} from '../login/user-thunks';
import {updateUserInfo} from '../login/user-reducer';

const ProfileComponent = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users);
    console.log(currentUser)

    function changeInput(ev) {
        console.log(updateUserInfo)
        dispatch(updateUserInfo({
            ...currentUser,
            [ev.target.name]: ev.target.value
        }))
    }

    function submitProfile() {
        dispatch(updateProfileThunk(currentUser))
    }
    return (
        <div className="wd-profile-page">
            <div className="col-auto ms-4" align="center">
                <h2 className="wd-profile-header">Your Athenaeum Profile</h2>
                {/*Example list to show current user fields*/}
                {currentUser &&
                <div>
                    <label htmlFor="firstName" className="form-label mt-3 ">Your First Name:</label>
                    <input onChange={changeInput} name="firstName" type="text" className="form-control w-auto" id="firstName" value={currentUser.firstName}></input>
                    <br/>
                    <label htmlFor="lastName" className="form-label mt-3 ">Your Last Name:</label>
                    <input onChange={changeInput} name="lastName"  type="text" className="form-control w-auto" id="lastName" value={currentUser.lastName}></input>
                    <br/>
                    <label htmlFor="username" className="form-label mt-3 ">Your Username:</label>
                    <input onChange={changeInput} name="username" type="text" className="form-control w-auto" id="username" value={currentUser.username}></input>
                    <br/>
                    {/*<label htmlFor="password" className="form-label mt-3 ">Your Password:</label>*/}
                    {/*<input onChange={changeInput} name="password" type="text" className="form-control w-auto" id="password" value={currentUser.password}></input>*/}
                    {/*<br/>*/}
                    <label htmlFor="phone" className="form-label mt-3 ">Your Phone:</label>
                    <input onChange={changeInput} name="phone" type="text" className="form-control w-auto" id="phone" value={currentUser.phone}></input>
                    <br/>
                    <label htmlFor="email" className="form-label mt-3 ">Your Email:</label>
                    <input onChange={changeInput} name="email" type="text" className="form-control w-auto" id="email" value={currentUser.email}></input>
                    <br/>
                    <label className="form-label mt-3 ">
                        Role:
                        <select name="role" id="" onChange={changeInput} >
                            <option value="Reader" defaultChecked={currentUser.role === 'Reader'}>Reader</option>
                            <option value="Author" defaultChecked={currentUser.role === 'Author'}>Author</option>
                            <option value="Moderator" defaultChecked={currentUser.role === 'Moderator'}>Moderator</option>
                        </select>
                    </label>
                    <br/>
                    <br/>
                </div>}
                <button className="wd-logout-button" onClick={submitProfile}>Submit</button>
                <br/><br/>
            </div>
        </div>
    )
}
export default ProfileComponent;
