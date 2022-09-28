import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { BiArrowToLeft } from "react-icons/bi";

//headers component it wil show login/register if user is not logged in , if user is logged then it will show username and logout option
function Header() {

    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigation = useNavigate()
    function logOut() {
        localStorage.clear();
        navigation('/register')
    }
    return (
        <header className='header'>
            <div className="logo">
                <Link to='/'>GoalSetter</Link>
            </div>
            <ul>
                {localStorage.getItem('user-info') ?
                    <>
                        <li>
                            <Link onClick={logOut} to='/register'  >
                                <BiArrowToLeft />LogOut
                            </Link>
                        </li>
                        <li>
                        <Link onClick={logOut} to='/register'  >
                                {user && user.name}
                            </Link>
                        </li>
                        
                    </>
                    :
                    <>  <li>
                        <Link to='/login' >
                            <FaSignInAlt />Login
                        </Link>
                    </li>
                        <li>
                            <Link to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>

                }
            </ul>
        </header>
    )

}
export default Header;