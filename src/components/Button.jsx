import React, { Fragment } from 'react'

const Button = ({button}) => {
  return (
    <Fragment>
        <div className='flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-y-0 px-12 sm:gap-x-4'>
            {button.map((val,id)=>{
                return(
                    <button key={id} className={`w-full ${id==0 ? "bg-[#393c41] text-white":"bg-[#e5e6e5]"} cursor-pointer rounded-md p-2 font-medium sm:w-80`}>{val}</button>
                )
            })}
        </div>
    </Fragment>
  )
}

export default Button
