import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

//This component is to protect unauthorized user access foreg if the user is not logged in he/she cannot get to addGoals or seeGOals page
function Protected(props) {
    let Cmp=props.Cmp;
    const navigation = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            //Off to DASHBoard
            navigation('/register')
        }
    }, [])
    return (
        <>
         <Cmp/>
        </>
    )

}
export default Protected;