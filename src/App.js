import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import './App.css';
import HomeComponent from "./home";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="/home" element={<HomeComponent/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
