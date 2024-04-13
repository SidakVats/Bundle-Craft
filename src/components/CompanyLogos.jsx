import React from 'react'
import {companyLogo} from "../constants/index"

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
      <h5 className='tagline mb-6 text-center text-n-1/50'>You Favourite brand are with us</h5>
      <ul className='flex ' >
        {companyLogo.map((logo, index) => (
            <li key={index} className='items-center justify-center flex-1 h-[8.5rem]'>
                <img src={logo.img1} alt={logo} width={134} height={28} />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyLogos
