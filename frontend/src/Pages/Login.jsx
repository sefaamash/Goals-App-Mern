import React from 'react';
import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import loginApi from '../api/LoginApi';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            //Off to DASHBoard
            navigation('/goals')
        }
    }, [])
    const onSubmit = async (e) => {
        e.preventDefault();
        let item = { email, password };
        console.log(item);
        let result = await loginApi(item);
        console.log(result)
        if (result) {
            console.log("result", result)
            //now storing that user is here in local storage
            localStorage.setItem('user-info', JSON.stringify(result));

            //Off to DASHBoard
            navigation('/goals')


        }
        else {
            console.log("Error in posting")
        }
    }
    return (
        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Login And Start Setting Goals</p>
            </section>
            <section className='form'>
                <form>

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
                        <button onClick={onSubmit} type='submit' className='btn btn-block' >Login</button>
                    </div>
                </form>
            </section>
        </>
    )

}
export default Login;