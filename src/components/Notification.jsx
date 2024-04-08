import React from 'react'
import { notification1,notification4, notification3, notification2 } from '../assets'


const Notification = ({className, title}) => {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>

      <img src={notification1} alt="img" width={62} height={62} className='rounded-lg'/>

      <div className='flex-1'>
        <h6 className='mb-1 font-semibold text-base uppercase'>{title}</h6>

        <div className='flex items-center justify-between'>
            <ul className='flex -m-0.5'>
              <li className='flex w-6 h-6 border-2 bordr-n-12 rounded-full overflow-hidden'>
                <img src={notification4} alt="img" className='w-full' width={20} height={20} />
              </li>
              <li className='flex w-6 h-6 border-2 bordr-n-12 rounded-full overflow-hidden'>
                <img src={notification3} alt="img" className='w-full' width={20} height={20} />
              </li>
              <li className='flex w-6 h-6 border-2 bordr-n-12 rounded-full overflow-hidden'>
                <img src={notification2} alt="img" className='w-full' width={20} height={20} />
              </li>
            </ul>
            <div className='body-3 text-n-13'>
              1 month
            </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
