import React from 'react'
import Cta from './Cta'
import Me from '../../assets/me.gif'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Oi, Eu sou</h5>
                <h1>Thigas</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <Cta/>
                <HeaderSocials/>
                <div className="me">
                    <img src={Me} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header


