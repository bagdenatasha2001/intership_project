import React from 'react'

export default function Button() {
    return (
        <>
            <div className=' flex gap-[14px]'>
                <button className='  text-black border border-gray-33 rounded-md w-[91px] h-[50px]   flex items-center justify-center font-bold'>
                    Cancel

                </button>

                <button className=' text-black border border-gray-33 rounded-md  w-[91px] bg-[grey] h-[50px]  flex items-center justify-center font-bold'>
                    Next

                </button>
            </div>



        </>
    )
}
