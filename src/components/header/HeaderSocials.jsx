import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/thiago-henrique-2133bb167/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/devthigas" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials