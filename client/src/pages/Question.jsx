// eslint-disable-next-line no-unused-vars
import React from "react";
import Question from "../components/Question";
 
function Questions() {
   const Questions = {Question.map((item, index) => (
        <Question  key={index} AnswerOne= {item.AnswerOne} AnswerOne = {item.AnswerTwo} AnswerOne = {item.AnswerThree} />
  ))}
  return (

  {Questions}
  )
}

export default Questions;