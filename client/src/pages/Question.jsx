// eslint-disable-next-line no-unused-vars
import React from "react";

function Questions(Question,AnswerOne,AnswerTwo,Answerthree) {
  return (
    <>
      <form className="main w-100% h-100vh bg-red-700 ">
        <div>
          <div className=" flex pb-2">
            <label>{Question}</label>
          </div>
             <div className="flex items-center ">
               <div 
               style={{paddingLeft:"100px"}}>
                <div>
                  <input type="radio" /> 
                  k
                  {/* {AnswerOne} */}
                </div>
                <div>
                  <input type="radio" /> 
                  {/* {AnswerTwo} */}
                  l
                </div>
                <div>
                  <input type="radio" />
                  {/* {Answerthree} */}
                  k
                </div>
               </div>
             </div>
         </div>
      </form>
    </>
  )
}

export default Questions;