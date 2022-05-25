import React from 'react'
import Cv from '../../assets/Fatura.pdf'


const Cta = () => {
  return (
    <div className='cta'>
        <a className='btn' href={Cv}download>Download Cv</a>
        <a className='btn btn-primary' href="#contact">Lets Talking</a>

    </div>
  )
}

export default Cta