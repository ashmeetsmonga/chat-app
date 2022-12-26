import React from "react";
import "./Login.css";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import { v4 as uuidV4 } from "uuid";

const Login = ({ onIdSubmit }) => {
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		onIdSubmit(inputRef.current.value);
	};

	const createNewId = () => onIdSubmit(uuidV4());

	return (
		<div className='login-page'>
			<form className='login-form'>
				<TextField inputRef={inputRef} variant='outlined' label='ID' name='userId' />
				<div className='button-group'>
					<Button type='submit' variant='contained' color='primary' onClick={handleSubmit}>
						Login
					</Button>
					<Button variant='contained' color='secondary' onClick={createNewId}>
						Create New Id
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
