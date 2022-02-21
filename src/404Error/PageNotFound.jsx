import React from 'react'
import { NavLink } from 'react-router-dom'
import ErrorImage from '../images/logos/404.jpg'

const PageNotFound = () => {
    return (<>
        <div className='main-error-page'>
            <div className='error'>
                <img src={ErrorImage} />
                <p><NavLink to='/' style={{ color: "grey" }} >Home page</NavLink></p>
            </div>
        </div>
    </>)
}
export default PageNotFound