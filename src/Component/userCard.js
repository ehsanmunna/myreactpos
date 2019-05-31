import React from "react";
// import { makeStyles } from "@material-ui/core/styles";


const UserCard = () => {
    const localdata = localStorage.getItem('token');
    const userData = JSON.parse(localdata).userInfo
    console.log(userData);
    return (
        
        <div style={{background: '#ccc', padding: 10}}>
            <div>Hi! {userData.person.lastName}</div>
            <small>you are logged is as {userData.userName}</small>
        </div>
    )

}

export default UserCard; 