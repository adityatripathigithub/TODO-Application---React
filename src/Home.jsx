import React, { useState } from 'react'
import Herder from './componnet/Herder'
import Inputcomponents from './componnet/Inputcomponents'
import Show from './componnet/Show'

const Home = () => {

    const [data, setdata] = useState({ name: "Hello" })
    return (

        <div className='h-screen mt-0 bg-[#27272A]'>
            <Herder value={data} />
            <Inputcomponents value={[data, setdata]} />
            <Show value={[data]} />
        </div>
    )
}

export default Home