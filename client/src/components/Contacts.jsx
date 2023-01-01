import React from "react";
import "./Contacts.css";
import { useContact } from "../contexts/ContactsProvider";

const Contacts = () => {
	const { contacts } = useContact();
	return (
		<div className='contacts-list'>
			{contacts.map((contact) => (
				<div className='contacts-list-item' key={contact.id}>
					{contact.name}
				</div>
			))}
		</div>
	);
};

export default Contacts;
