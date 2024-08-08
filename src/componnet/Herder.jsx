import React from 'react'

const Herder = () => {


    return (
        <div className='box  w-[25%] h-[20vh]  border-[1px] rounded-[30px] mx-[35vw] pt-8'>
            <h1 className=' mx-5 text-3xl font-bold text-[#FEF9C3]'>LETS TODO</h1>
            <p className=' mx-5 text-[#FEF9C3]'>Keeps doing things</p>
            <div className='circle w-[7%] h-[14%] absolute  left-[50%] top-[3%] rounded-full px-9 pt-10 text-xl font-bold bg-[#EA580C]'>0/0</div>
        </div>
    )
}

export default Herder