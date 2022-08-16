import React from "react"

export default function Info(){
    return (
        <div className="info">
            <img className="profile-pic" src={require(".././images/profile.jpg")} alt="profile_pic"/>
            <h2 className="info--name">Beket Myrzanov</h2>
            <h3 className="info--position">Machine Learning Engineer</h3>
            <h4 className="info--website">beketmyrzanov.com</h4>
            <button className="info--email-button"><i className="fa-solid fa-envelope"></i>          Email</button>
        </div>
    )
}