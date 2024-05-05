//import { useState } from "react";
import "./AboutUs.scss"

export default function AboutUs() {

    return (
    
       <><div className="aboutus">
            <h1>About Us </h1>
            <p>Some information about who we are.</p>
            <p>10.6 Pursuit Fellows</p>
        </div><h2>Our Team</h2><div className="row" /><div className="column">
                <div className="card">
                    <div className="container">
                        <h2>Ayyoub Belibel</h2>
                        <p className="title">Team Member</p>
                        <p>Pursuit Fellow.</p>
                        <p>abelibel@pursuit.org</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div><div className="column">
                <div className="card">
                    <div className="container">
                        <h2>Alex Perez</h2>
                        <p className="title">Team Member</p>
                        <p>Pursuit Fellow.</p>
                        <p>aperez@pursuit.org</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div><div className="column">
                <div className="card">
                    <div className="container">
                        <h2>Ray Zhou</h2>
                        <p className="title">Team Member</p>
                        <p>Pursuit Fellow.</p>
                        <p>rzhou@pursuit.org</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div><div className="column">
                <div className="card">
                    <div className="container">
                        <h2>Shanel Elm</h2>
                        <p className="title">Team Member</p>
                        <p>Pursuit Fellow.</p>
                        <p>selm@pursuit.org</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div></>
    );
}
