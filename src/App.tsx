import { Route, Routes } from "react-router-dom";
import MainLayout from "./ui/MainLayout";

import Home from "./ui/pages/Home";

import "./ui/styles/global.css";
// import GlobalStyle from "./ui/styles";

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
          path="/"
        />
      </Routes>
    </>
  );
}

export default App;
