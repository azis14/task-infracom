import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosNasa from "../axiosAPI";

import './homepage.css';
import axiosInstance from '../axiosBackend';
import { logout } from '../../utils/utils';

export default function Homepage(props) {
    const [data, setData] = useState("");

    const getData = () => {
        axiosNasa.get('apod').then(function (res) {
            setData(res.data);
        }).catch((err) => {
            setData(err);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    function handleLogout() {
        axiosInstance.post('logout', {
            "refresh_token": localStorage.getItem("refresh_token")
        }).then(function () {
            logout();
            props.history.push('/login');
        }).catch((err) => {
            console.log(err);
        });
    }

    return(
        <div className="homepage">
            <div onClick={handleLogout} className="btn-logout">Logout</div>

            <div className="img-nasa">
                <img src={data.hdurl} alt="photo"/>
            </div>

            <div className="exp-nasa">
                {data.explanation}
            </div>
            <Link to="/profile" className="btn-profile">My Profile</Link>
        </div>
    );
}