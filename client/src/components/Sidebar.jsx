import React from "react";
import "./Sidebar.css";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { AppBar, Box, Button, Tab, Typography } from "@mui/material";
import { useState } from "react";
import Conversations from "./Conversations";
import Contacts from "./Contacts";

const Sidebar = ({ id }) => {
	const [value, setValue] = useState("conversations");
	const conversationOpen = value === "conversations";
	return (
		<div className='sidebar-container'>
			<div>
				<TabContext value={value}>
					<div>
						<AppBar position='static'>
							<TabList
								onChange={(e, newValue) => setValue(newValue)}
								aria-label='Sidebar'
								variant='fullWidth'
								textColor='inherit'
							>
								<Tab label='Conversations' value='conversations' />
								<Tab label='Contacts' value='contacts' />
							</TabList>
						</AppBar>
					</div>
					<TabPanel value='conversations'>
						<Conversations />
					</TabPanel>
					<TabPanel value='contacts'>
						<Contacts />
					</TabPanel>
				</TabContext>
			</div>
			<div className='sidebar-bottom'>
				<div>
					<Typography variant='subtitle1'>Your Id : {id}</Typography>
				</div>
				<Button color='primary' variant='contained' size='large'>
					New {conversationOpen ? "Conversation" : "Contact"}
				</Button>
			</div>
		</div>
	);
};

export default Sidebar;
