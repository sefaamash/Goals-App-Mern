import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDE } from 'react-icons/fa'
import { BiMessageAltEdit } from "react-icons/bi";
import { BsFillArchiveFill } from "react-icons/bs";
import GoalsItem from '../Components/GoalsItem';
import { useState } from 'react';
import GetGoalsApi from '../api/GetGoalsApi';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";


//Each GOAL IS CALLED HERE IN THIS COMPONENT IN UNORDERED LIST
function Goals(props) {
    const [userGoals, setUserGoals] = useState([]);
    useEffect(() => {
        //Calling Get Goals Api function from api folder which is fetching data from Api
        if (localStorage.getItem("user-info")) {
            let result = GetGoalsApi().then((res) => {

                console.log("goals log", res.goals)
                setUserGoals(res.goals);

            });
            console.log("Get Goal Buffer", result);

        }
    }, [])

    return (
        <>
         <Link className='itemBtn1' to="/">AddGoals <AiOutlinePlus /> </Link>
            <ul className='goa'>
                {userGoals.map((goal) => <GoalsItem goal={goal} />)}
            </ul>
        </>
    )
}
export default Goals;