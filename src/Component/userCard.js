import React from "react";
import { Link } from "react-router-dom";

const UserCard = () => {
    const localdata = localStorage.getItem('token');
    const userData = JSON.parse(localdata).userInfo
    // console.log(userData);
    return (
        
        <div style={{background: '#ccc', padding: 10}}>
            <div>Hi! {userData.person.firstName} {userData.person.lastName}</div>
            <small>you are logged is as {userData.userName}</small>
            <small>
                <Link to={`/dashboard/updateuser/${userData.userId}`}>edit</Link>
            </small>
        </div>
    )

}

export default UserCard; 