import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";

const Dashboard = ({ id }) => {
	return (
		<div className='dashboard-container'>
			<div className='dashboard-sidebar'>
				<Sidebar id={id} />
			</div>
		</div>
	);
};

export default Dashboard;
