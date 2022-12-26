import React from "react";
import "./Login.css";
import { Button, TextField } from "@material-ui/core";

const Login = () => {
	return (
		<div className='login-page'>
			<form className='login-form' action=''>
				<TextField variant='outlined' label='ID' name='userId' />
				<div className='button-group'>
					<Button variant='contained' color='primary'>
						Login
					</Button>
					<Button variant='contained' color='secondary'>
						Create New Id
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
