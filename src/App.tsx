import {Route, Routes} from "react-router-dom";
import MainLayout from "./ui/MainLayout";

import Home from "./ui/pages/Home/Home";
import Login from "./ui/pages/Login";

function App() {
    return (
        <Routes>
            <Route
                element={
                    <MainLayout>
                        <Home/>
                    </MainLayout>
                }
                path="/home"
            />
            <Route
                element={
                    <MainLayout>
                        <Login/>
                    </MainLayout>
                }
                path="/"
            />
        </Routes>
    );
}

export default App;
