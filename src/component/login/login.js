import React, { useState } from "react";
import axiosInstance from "../axiosBackend";

import './login.css';
import { login } from "../../utils/utils";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(email, password) {
        axiosInstance.post('token', {
            "email": email,
            "password": password
        }).then(function (res) {
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            login();
            props.history.push('/');
        }).catch((err) => {
            console.log(err);
        })
    }

    function handleEmail(event) {
        event.preventDefault();
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        event.preventDefault();
        setPassword(event.target.value);
    }

    return(
        <div className="login-page">
            <div className="box-login">
                <h1>Login</h1>

                <form action={handleLogin}>
                    <label className="label-login" htmlFor="email">Email</label>
                    <input value={email} onChange={(event) => handleEmail(event)} id="email" type="text"/>
                    <br/>
                    <br/>
                    <label className="label-login" htmlFor="password">Password</label>
                    <input value={password} onChange={(event) => handlePassword(event)} id="password" type="password"/>
                    <br/>
                    <button onClick={handleLogin(email, password)} className="btn-login">Login</button>
                </form>
            </div>
        </div>
    );
}