import React, { useRef } from "react";
import { Button, TextField } from "@mui/material";
import { useContact } from "../contexts/ContactsProvider";

const NewContactModal = ({ showModal }) => {
	const { createNewContact } = useContact();

	const idRef = useRef();
	const nameRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		createNewContact(idRef.current.value, nameRef.current.value);
		showModal(false);
	};
	return (
		<div className='contactModal-container'>
			<div className='contactModal-title'>Create New Contact</div>
			<form onSubmit={handleSubmit} className='contactModal-form'>
				<TextField inputRef={idRef} variant='outlined' label='ID' name='userId' required />
				<TextField inputRef={nameRef} variant='outlined' label='Name' name='userName' required />
				<Button type='submit' variant='contained' color='primary'>
					Create Contact
				</Button>
			</form>
		</div>
	);
};

export default NewContactModal;
