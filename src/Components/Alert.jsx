import React from 'react'
import {useContext} from 'react';
import AlertContext from './Context/AlertContext';

function Alert() {
    const {isOpen, type, message, onClose} =useContext(AlertContext);
    const cancelRef = useRef();
    const isSuccess = type === 'success';

  return (
    <div isOpen={isOpen} onClose={onClose} ref={cancelRef} >
        <div className='absolute z-50 w-1/2'>
            <div className='w-full flex items-center justify-center' style={{backgroundColor:`${isSuccess} ? #81C784 : #FF8A65`}} >
                <h2 className='text-bold, text-xl'>{isSuccess ? 'All good!': 'Oops!'}</h2>
                <p className='font-sans text-lg'>{message}</p>

            </div>
        
        </div>
    </div>
  )
}

export default Alert
