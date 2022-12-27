import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
	const [id, setId] = useState("123-456-789");

	return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
