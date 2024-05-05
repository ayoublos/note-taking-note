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
                    <img src="https://img.freepik.com/free-photo/abstract-background-with-low-poly-design_1048-8478.jpg?size=626&ext=jpg&ga=GA1.1.1599245033.1714936271&semt=sph"/>
                    <div className="container">
                        <h2>Ayyoub Belibel</h2>
                        <p className="title">Team Member</p>
                        <p>Pursuit Fellow</p>
                        <p>abelibel@pursuit.org</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div><div className="column">
                <div className="card">
                    <img src="https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg?size=626&ext=jpg&ga=GA1.1.1599245033.1714936271&semt=sph"/>
                    <div className="container">
                        <h2>Alex Perez</h2>
                        <p className="title">Team Member</p>
                        <p>Pursuit Fellow</p>
                        <p>aperez@pursuit.org</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div><div className="column">
                <div className="card">
                    <img src="https://img.freepik.com/premium-photo/sleek-futuristic-interface-with-holographic-buttons-epitomizing-advanced-user-experience_118124-180651.jpg?size=626&ext=jpg&ga=GA1.1.1599245033.1714936271&semt=sph"/>
                    <div className="container">
                        <h2>Ray Zhou</h2>
                        <p className="title">Team Member</p>
                        <p>Pursuit Fellow</p>
                        <p>rzhou@pursuit.org</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div><div className="column">
                <div className="card">
                    <img src="https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?size=626&ext=jpg&ga=GA1.1.1599245033.1714936271&semt=sph"/>
                    <div className="container">
                        <h2>Shanel Elm</h2>
                        <p className="title">Team Member</p>
                        <p>Pursuit Fellow</p>
                        <p>selm@pursuit.org</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div></>
    );
}
