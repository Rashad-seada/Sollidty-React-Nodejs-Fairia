// eslint-disable-next-line no-unused-vars
import React from "react";

function Question(QuestionOne,QuestionTwo,QuestionThree) {
  return (
    <>
      <form className="main w-100% h-100vh bg-red-700 ">
        <div>
          <div className=" flex pb-2">
            <label>Question One</label>
          </div>
             <div className="flex items-center ">
               <div 
               style={{paddingLeft:"100px"}}>
                <div>
                  <input type="radio" /> {QuestionOne}
                </div>
                <div>
                  <input type="radio" /> {QuestionTwo}
                </div>
                <div>
                  <input type="radio" />{QuestionThree}
                </div>
               </div>
             </div>
         </div>
      </form>
    </>
  )
}

export default Question;