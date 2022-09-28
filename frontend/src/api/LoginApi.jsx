import React from 'react';
import { useState, useEffect } from 'react';
function loginApi(props) {
    return new Promise((resolve, reject) => {
        //this iten object will come from login page when user enter email and password 
        let item = {
            "email": props.email,
            "password": props.password
        }
        //setting headers and request types
        let setting = {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }
        //fetching response data from json 
        fetch('http://localhost:8000/api/users/login', setting).then((res) => res.json()).then((resp) => {
            console.log("resp: ", resp)
            resolve(resp)
        }).catch((err) => reject(false))
    })

}

export default loginApi;