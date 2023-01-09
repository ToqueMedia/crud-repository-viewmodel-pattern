import { Route, Routes } from "react-router-dom";
import MainLayout from "./ui/MainLayout";

import Home from "./ui/pages/Home";
import Login from "./ui/pages/Login";

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
					path="/home"
				/>
				<Route
					element={
						<MainLayout>
							<Login />
						</MainLayout>
					}
					path="/"
				/>
			</Routes>
		</>
	);
}

export default App;
