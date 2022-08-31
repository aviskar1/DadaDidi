import React from 'react'
import {Link} from 'react-router-dom'
import logoStyle from './Navigation.module.css'


const Navigation = () => {
  return (
    <nav className= {`${logoStyle.logo} container`}>
        
        <Link to= "/">
            <img src='/images/logo.png' alt='logo'></img>
        </Link>
    </nav>
  )
}

export default Navigation