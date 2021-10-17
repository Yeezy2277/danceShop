import './App.css';
import Store from "./components/reducers/store";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import MainLayout from "./components/view/layout/MainLayout";

function App() {
    return (
        <Store>
            <Router>
                <MainLayout/>
            </Router>
        </Store>
    );
}

export default App;
