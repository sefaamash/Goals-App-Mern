import React from 'react';
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import RegisterApi from '../api/RegisterApi';
import { useNavigate } from 'react-router-dom';
function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //Navigtion in react -router
    const navigation = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        let item = { name, email, password };
        console.log(item);
        let result = await RegisterApi(item);
        console.log(result)
        if (result) {
            console.log("result", result)
            //now storing that user is here in local storage
            localStorage.setItem('user-info', JSON.stringify(result));
            //Off to DASHBoard
            navigation('/')

        }
        else {
            console.log("Error in posting")
        }
    }
    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create An account</p>
            </section>
            <section className='form'>
                <form>
                    <div className="form-group">
                        <input type="text" className='form-control'
                            id='name' value={name}
                            placeholder='Enter your name'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className='form-control'
                            id='email' value={email}
                            placeholder='Enter your email'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className='form-control'
                            id='password' value={password}
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button onClick={onSubmit} type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )

}
export default SignUp;