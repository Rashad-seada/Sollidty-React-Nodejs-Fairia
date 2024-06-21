// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function OfferCard({title,description} ) {
  
  // const {id} = useParams ();
  // console.log(id)
  return (
    <>
      <div className='bg-primary'>

     <div className=' pb-44  pr-20 w-70% '>
      <div className="flex   ml-44 mt-20 bg-secon p-10  pb-24  bg-secondary rounded-2xl">
        <div className=" text-3xl  relative w-20  h-20 overflow-hidden bg-secondary rounded-full ">
                    <img
                      src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                       className=" relative z-10 rounded-sm bg-sky-400 "
                      alt="Person-logo"
                    />
        </div>
            <div >
            <div className=" pl-20">
            </div>
           <div className=" pt-4 ">
           <h1 className="pb-1 text-sky-400 pl-28 text-3xl"> {title} </h1>
             <p className=" text-gray-400 pt-4 pl-32"> {description} </p>
           </div>
        </div>
      </div>
     </div>
</div>
</>
  )
}
export default OfferCard