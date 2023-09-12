import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { actions } = useContext(Context);

	const [form, setForm] = useState({
		email:"",
		password:"",
	})

	function inputValue(e){
		setForm({...form, [e.target.name]: e.target.value})
	};

	function sendLogin(e) {
		e.preventDefault();
		actions.login(form);
	};
	console.log(form)
	return (
		<>
			<div className="container">
				<h1 className="Text-center">Login</h1>
				<form className="col-sm-12 col-md-8 col-lg-10" onSubmit={sendLogin}>
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input type="email" className="form-control" name="email" onChange={inputValue}/>
						<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input type="password" className="form-control" name="password" onChange={inputValue}/>
					</div>
					<button type="submit" className="btn btn-primary">Login</button>
				</form>
				<div className="text-center">
					If you don't have an user <span><Link to={"/singup"}>clic here to register</Link></span>
				</div>
			</div>
		</>
	);
};
