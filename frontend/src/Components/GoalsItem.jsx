import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDE } from 'react-icons/fa'
import { BiMessageAltEdit } from "react-icons/bi";
import { BsFillArchiveFill } from "react-icons/bs";
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

//The goals fetched from database will be fetched here in this component
function GoalsItem(props) {
    let navigation = useNavigate();
    function updateGoal(id) {
        navigation('/update/'+id);
}
    return (
        <div className="gocon">
            <li >
                <Card style={{ width: '70rem' }} className='goal'>
                    <Card.Body className='goals'>
                        <Card.Title className='goaltxt'>{props.goal.text}</Card.Title>
                        <div className="btncontainer">
                            <Button className='btnG1' onClick={() => updateGoal(props.goal._id)} ><BiMessageAltEdit />Edit</Button>
                            <Button className='btnG2'> <BsFillArchiveFill /> Trash</Button>
                        </div>
                    </Card.Body>
                </Card>
            </li>

        </div>
    )
}
export default GoalsItem;