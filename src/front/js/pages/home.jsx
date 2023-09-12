import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [form, setForm] = useState({
		email:"",
		password:"",
	})
	
	const navigate = useNavigate();
	function inputValue(e){
		setForm({...form, [e.target.name]: e.target.value})
	};

	const login = async(form) => {
		const resp = await actions.login(form);
		if (resp == true){
			navigate('/private');
		}
	}
	function sendLogin(e) {
		e.preventDefault();
		login(form);
	};

	if (store.token && store.token !== "" && store.token !== undefined) navigate("/private");
	console.log(store.token)
	
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
