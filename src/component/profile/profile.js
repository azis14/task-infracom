import React, { useState } from "react";
import { Link } from "react-router-dom";

import './profile.css';

export default function Profile() {
    const [exp, setExp] = useState(false);
    const [org, setOrg] = useState(false);

    let boxExp;
    let boxOrg;

    if(exp) {
        boxExp = (
            <div className="box">
                <h2>Work Experience</h2>

                <h5>TapTalk</h5>
                <h6>Full Stack Developer (Apr 2021 - present)</h6>
                <p>My role is to develop some prodcut from TapTalk such as SendTalk, Tap2Order, OneTalk, and PowerTalk. I use Next.js for frontend and Go for backend</p>

                <hr/>

                <h5>Moselo (PT. Komunitas Karya Kencana)</h5>
                <h6>Full Stack Developer (Jan 2021 - Apr 2021)</h6>
                <p>My role is to develop admin page website to help moselo's rangers managing their business. It website developed using Laravel for backend and Angular.js for frontend.</p>

                <hr/>

                <h5>University of Indonesia</h5>
                <h6>Teaching Assistant for Programming Foundation 2 (Aug 2020 - present)</h6>
                <p>My role is to help the student of programming foundation 2 class to understand the material from our lecturer. The student can ask me to tutoring them if they're find material that hard to understand.</p>
            </div>
        );
    }

    if(org) {
        boxOrg = (
            <div className="box">
                <h2>Organization Experience</h2>

                <h5>Student Executive Board Faculty of Computer Science UI</h5>
                <h6>President (2021)</h6>
                <p>My role is to set strategic planning, organize people and function, lead them, work together with all our pride member, and evaluate the process.</p>

                <hr/>

                <h5>Student Executive Board Faculty of Computer Science UI</h5>
                <h6>Head of Research and Strategic Action Departement (2020)</h6>
                <p>My department has a function to study and respond to issues in the social and political fields related to technology. My role is to lead two deputy and five staff and be representative of my faculty on social politic network forum with other faculties in my university.</p>

                <hr/>

                <h5>Student Executive Board Faculty of Computer Science UI</h5>
                <h6>Staff of Research and Strategic Action Departement (2019)</h6>
                <p>My department has a function to study and respond to issues in the social and political fields related to technology. My role focused on organizing an public discussion about social political issues.</p>
            </div>
        );
    }

    function handleExp() {
        setExp(!exp);
    }

    function handleOrg() {
        setOrg(!org);
    }

    return(
        <div className="profile-page">
            <Link className="btn-back" to="/">Back</Link>
            <div className="box-biodata">
                <h1>Muhammad Azis Husein</h1>
                <h5>21 Years Old</h5>

                <p>I'm just an ordinary man who still strive to study at Faculty of Computer Science, University of Indonesia. I love to code anywhere anytime and always eager to learn more about software engineering or any other topics related to IT. Sometimes I spend my spare time with reading a book or writing. I also interested to discuss about social and political issues, public policy, or someone thought. If you want more information about me or wanna get closer to me, just don't hesitate to click the button below!</p>

                <a href="https://azis14.herokuapp.com/" className="btn-link">Click Here!</a>
            </div>

            <div onClick={handleExp} className="trigger">Work Experience</div>
            {boxExp}

            <div onClick={handleOrg} className="trigger">Organization</div>
            {boxOrg}
        </div>
    );
}