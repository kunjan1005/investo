import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logos/black.svg';
import img19 from '../images/logos/image-19.png';
import img4 from '../images/logos/image-4.png';
const Login = () => {
    return (<>

        <div className='container main-login-container'>
            <div className='row'>
                <div className='col-lg-5 col-md-5 col-sm-5 col-12'>
                    <img className='logo-investo' src={Logo} />
                    <h2 className='login-text text-center mt-5'>Login</h2>

                    <p for="email" className='ml-5'>E-mail</p>
                    <input type='text' name='email' className='email-id m-auto d-block' />

                    <div className='d-flex justify-content-between mt-5'>
                        <p for="password" className='ml-5'>Password</p>
                        <NavLink to="#" className='forgot-pass mr-5'>Forgot Password</NavLink>
                    </div>
                    <input type='text' name='password' className='password m-auto d-block' />
                    <button className='login-btn d-block m-auto mt-5'>Login</button>
                </div>
                <div className='col-lg-7 col-md-7 col-sm-7 col-12'>
                    <div className='bg-color'>
                        <div className='img-19 d-flex'>
                            <div class="image-stack">
                                <div class="image-stack__item image-stack__item--top">
                                    <img src={img19} alt="img19" className='imgs' />
                                </div>
                                <div class="image-stack__item image-stack__item--bottom">
                                    <img src={img4} alt="img4" className='imgs' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default Login