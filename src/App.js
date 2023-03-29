import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialog} from "./components/Dialog";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Dialog/>} path={"*"}>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
