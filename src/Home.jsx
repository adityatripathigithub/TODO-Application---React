import React from 'react'

const Home = () => {
    return (

        <div className='h-screen mt-0 bg-[#000]'>
            <div className='box  w-[25%] h-[20vh]  border-[1px] rounded-[30px] mx-[35vw] pt-8'>
                <h1 className=' mx-5 text-3xl font-bold text-[#FEF9C3]'>LETS TODO</h1>
                <p className=' mx-5 text-[#FEF9C3]'>Keeps doing things</p>
                <div className='circle w-[7%] h-[14%] absolute  left-[50%] top-[3%] rounded-full px-9 pt-10 text-xl font-bold bg-[#EA580C]'>0/0</div>
            </div>
            <input className='w-[20%] h-[6%] bg-[#475569] rounded-full mx-[35%] mt-8 p-3' type="text" placeholder="Wright Your Next Task..." />
            <div className='circle2 w-[3%] h-[6%] absolute top-[24.2%]  mx-[56%] text-4xl rounded-full  px-[0.7%]   bg-[#EA580C]'>+</div>
            <p className='  text-[#EA580C] mx-[37%] mt-20 text-3xl'>No Pending Tasks</p>

        </div>
    )
}

export default Home