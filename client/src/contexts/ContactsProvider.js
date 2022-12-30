import React, { createContext, useContext, useState } from "react";

const ContactsContext = createContext();

export const useContact = () => {
	return useContext(ContactsContext);
};

export const ContactsProvider = ({ children }) => {
	const [contacts, setContacts] = useState([]);

	const createNewContact = (id, name) => {
		console.log(contacts);
		setContacts((prevContacts) => [...prevContacts, { id, name }]);
	};

	return (
		<ContactsContext.Provider value={{ contacts, createNewContact }}>
			{children}
		</ContactsContext.Provider>
	);
};
