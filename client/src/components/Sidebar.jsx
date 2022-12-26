import React from "react";
import "./Sidebar.css";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import Conversations from "./Conversations";
import Contacts from "./Contacts";

const Sidebar = () => {
	const [value, setValue] = useState("conversations");
	return (
		<div className='sidebar-container'>
			<TabContext value={value}>
				<div>
					<TabList
						onChange={(e, newValue) => setValue(newValue)}
						aria-label='Sidebar'
						variant='fullWidth'
					>
						<Tab label='Conversations' value='conversations' />
						<Tab label='Contacts' value='contacts' />
					</TabList>
				</div>
				<TabPanel value='conversations'>
					<Conversations />
				</TabPanel>
				<TabPanel value='contacts'>
					<Contacts />
				</TabPanel>
			</TabContext>
		</div>
	);
};

export default Sidebar;
