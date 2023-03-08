import React from 'react'

function Alert() {
  return (
    <div >
        <div className='absolute z-50 w-1/3 top-0 right-0'>
            <div className='w-full flex items-center justify-center bg-green-600' >
                <h2 className='text-bold, text-xl'>All good!</h2>
                <p className='font-sans text-lg'>You Have successfully registered</p>
            </div>
        </div>

{/* <div isOpen={isOpen} onClose={onClose} ref={cancelRef} >
        <div className='absolute z-50 w-1/2'>
            <div className='w-full flex items-center justify-center' style={{backgroundColor:`${isSuccess} ? #81C784 : #FF8A65`}} >
                <h2 className='text-bold, text-xl'>{isSuccess ? 'All good!': 'Oops!'}</h2>
                <p className='font-sans text-lg'>{message}</p>

            </div>
        
        </div>
    </div> */}
    </div>
  )
}
export default Alert
