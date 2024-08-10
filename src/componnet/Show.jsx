import React, { useState } from 'react'

const Show = (props) => {

  const [data] = props.value

  console.log(data.name);

  const [sdata, setdata] = useState([{ taskname: "task1", iscomplete: true }, { taskname: "task1", iscomplete: true }])



  return (
    <div>
      <p className='text-4xl font-bold mx-[37%] mt-16 text-[#EA580C]'>No Pending Task</p>
      <div className="alltaskas flex w-96 mx-auto flex-col gap-4">
        {
          data.map((task, index) => (<div className="task w-full h-[40px] bg-gray-400 mx-auto ">{task.taskname}
          </div>))
        }
      </div>
    </div>
  )
}

export default Show