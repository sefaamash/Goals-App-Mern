import React from 'react';
import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CreateGoalsApi from '../api/CreateGoalsApi';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
    const [goals, setGoals] = useState('');
    const navigation = useNavigate()

    //Submitting goals to Database
    const goalSubmit = async (e) => {
        e.preventDefault();
        let item = { goals };
        console.log(item);
        let result = await CreateGoalsApi(item);
        console.log(result)
        if (result) {
            console.log("GoalsCreateResult", result)
            if (localStorage.getItem("user-info")) {
                localStorage.setItem('goal-info', JSON.stringify(result));
                //Navigating to goal page
                navigation('/goals')
            }

        }
        else {
            console.log("Error in Submitting Goal")
        }

    }

    return (
        <>
            <section className='heading'>
                <h1>
                    Goals
                </h1>
                <p>What are your Goals?</p>
            </section>
            <section className='form'>
                <form>

                    <div className="form-group">
                        <input type="text" className='form-control'
                            id='goal' value={goals}
                            placeholder='Enter your Goal'
                            onChange={(e) => setGoals(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button type='submit' className='btn btn-block' onClick={goalSubmit}>Set</button>
                    </div>
                    <Link className='itemBtn2' to='/goals'>Your Goals  <FaSignInAlt className='icon' />  </Link>
                </form>
            </section>
        </>
    )

}
export default DashBoard;