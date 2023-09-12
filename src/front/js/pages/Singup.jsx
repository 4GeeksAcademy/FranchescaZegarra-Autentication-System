import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Singup = () => {
	const { actions } = useContext(Context);

	const navigate = useNavigate();

	const [form, setForm] = useState({
		email: "",
		password: "",
	})

	function inputValue(e) {
		setForm({ ...form, [e.target.name]: e.target.value })
	};

	const singup = async (form) => {
		const resp = await actions.singup(form);
		if (resp == true) {
			navigate('/');
		}
		return resp
	}
	function sendSingup(e) {
		e.preventDefault();
		singup(form)
	};

	return (
		<>
			<div className="container">
				<h1 className="text-center">Singup</h1>
				<form className="col-sm-12 col-md-8 col-lg-10" onSubmit={sendSingup}>
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input type="email" className="form-control" name="email" onChange={inputValue} />
						<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input type="password" className="form-control" name="password" onChange={inputValue} />
					</div>
					<button type="submit" className="btn btn-primary">Sing up</button>
				</form>
			</div>
		</>
	);
};