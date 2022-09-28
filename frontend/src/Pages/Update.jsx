import React from 'react';
import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function UpdateGoals(props) {
   return (
        <>
            <section className='heading'>
                <h1>Goals</h1>
                <p>Want to Update Goal</p>
            </section>
            <section className='form'>
                <form>

                    <div className="form-group">
                        <input type="text" className='form-control'
                            id='goal' 
                            placeholder='Enter your Goal'
                             />
                    </div>

                    <div className="form-group">
                        <button type='submit' className='btn btn-block' >Update</button>
                    </div>
                    <Link className='itemBtn2' to='/goals'>Your Goals  <FaSignInAlt className='icon' />  </Link>
                </form>
            </section>
        </>
    )

}
export default UpdateGoals;