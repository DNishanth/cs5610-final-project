import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import './App.css';
import HomeComponent from "./home";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import bookSearchReducer from "./search/search-reducer";
import bookDetailsReducer from "./details/details-reducer";
import DetailsComponent from "./details";
import LoginComponent from "./login";
import ProfileComponent from "./profile";
import RegisterComponent from "./register";

const store = configureStore({
    reducer: {
        books: bookSearchReducer,
        details: bookDetailsReducer
    }
})

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="/home" element={<HomeComponent/>}/>
                        <Route path="/details/:workID" element={<DetailsComponent/>}/>
                        <Route path="/login" element={<LoginComponent/>}/>
                        <Route path="/register" element={<RegisterComponent/>}/>
                        <Route path="/profile" element={<ProfileComponent/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;