import React from 'react'
import Cta from './Cta'
import Me from '../../assets/me.gif'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>OI, EU SOU</h5>
                <h1>Thigas</h1>
                <h5 className="text-light">Desenvolvedor Front-end</h5>
                <h5>Full-Stack em formação...</h5>
                <Cta/>
                <HeaderSocials/>
                <div className="me">
                    <img src={Me} alt=""/>
                </div>
                <a className='scroll_down' href="#contact">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header


