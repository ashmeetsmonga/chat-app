import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { ContactsProvider } from "./contexts/ContactsProvider";

function App() {
	const [id, setId] = useState("123-456-789");

	const dashboard = (
		<ContactsProvider>
			<Dashboard id={id} />
		</ContactsProvider>
	);

	return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
