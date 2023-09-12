import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const {actions} = useContext(Context);
    const navigate = useNavigate();
    const logout = () =>{
        actions.logout();
        navigate('/');
    }
    return (
        <>
            <h1>Private window</h1>
            <button type="button" className="btn btn-danger" onClick={()=>logout()}>Cerrar Sesión</button>
        </>
    );
};