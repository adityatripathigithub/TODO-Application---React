import React from 'react'


const Inputcomponents = (props) => {
  console.log(props.value);

  const [data , setdata]=props.value

  console.log(data);
  console.log(setdata);
  
  const haddechane = ()=>{
    setdata({name:"shivam"})
  }


  return (
    <div>
      <input className='w-[20%] h-[6%] bg-[#475569] rounded-full mx-[35%] mt-8 p-3' type="text" placeholder={data.name} />
      <div onClick={()=>haddechane()} className='circle2 w-[3%] h-[6%] absolute top-[24.2%]  mx-[56%] text-4xl rounded-full  px-[0.7%]   bg-[#EA580C]'>+</div>
    </div>
  )
}

export default Inputcomponents