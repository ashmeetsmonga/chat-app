import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import Login from "./components/Login";

function App() {
	const [id, setId] = useState("");

	console.log(id);

	return <Login onIdSubmit={setId} />;
}

export default App;
