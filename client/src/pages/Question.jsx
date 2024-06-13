import React, { useState } from "react";
import questions from "../data/Qustitions";
import { Link } from "react-router-dom";

const QuestionForm = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(null);
  // const questions = [
  //   {
  //     id: 1,
  //     question: 'Have you utilized relevant construction technologies (e.g., BIM, 3D printing, prefabrication technology  in previous projects?',
  //     options: [
  //       { value: 'Yes', label: 'Yes' },
  //       { value: 'No', label: 'No' },
  //     ],
  //     correctAnswer: 'Yes',
  //   },
  //   {
  //     id: 2,
  //     question: 'Will you be developing a Work Breakdown Structure (WBS) for this project?',
  //     options: [
  //       { value: 'Yes', label: 'Yes' },
  //       { value: 'No', label: 'No' },
  //     ],
  //     correctAnswer: 'pacific',
  //   },
  //   // Add more questions as needed
  // ];

  const handleOptionChange = (questionId, value) => {
    setSelectedAnswer({ [questionId]: value });
    console.log("selected  ", value);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };
  const getScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (selectedAnswer[question.id] + question.value) {
        score++;
      }
    });
    return score;
  };

  return (
    <div>
      <div className="bg-primary text-xl ">
        <p className="flex justify-center text-7xl pb-20  text-sky-400">
          Qustions
        </p>
        {questions.map((question) => (
          <div className="  pl-40" style={{ width: "100%" }} key={question.id}>
            <p className="text-white text-md">
              {" "}
              {question.id} - {question.question}
            </p>
            {question.options.map((option) => (
              <div
                className=" flex  mb-4 pl-6 pt-2 text-sky-500 "
                key={option.value}
              >
                <div>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.value}
                    checked={selectedAnswer?.[question.id] === option.value}
                    onChange={() =>
                      handleOptionChange(question.id, option.value)
                    }
                  />
                  <label className="pl-3">{option.label}</label>
                </div>
                <div></div>
              </div>
            ))}
          </div>
        ))}
        <Link
          className=" flex justify-center items-center bg-sky-400 p-1 text-lg  w-40 h-10 rounded-xl  text-black"
          onClick={handleSubmit}
        >
          Submit
        </Link>

        {showResult && (
          <div>
            <p>
              Your score: {getScore()} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionForm;

// function Questions() {

//   const [Question1, setQuestion1] = useState('QuestionOne');
//   const [Question2, setQuestion2] = useState('QuestionOne');
//   const [Question3, setQuestion3] = useState('QuestionOne');
//   const [Question4, setQuestion4] = useState('QuestionOne');
//   const [Question5, setQuestion5] = useState('QuestionOne');
//   const [Question6, setQuestion6] = useState('QuestionOne');
//   const [Question7, setQuestion7] = useState('QuestionOne');
//   const [Question8, setQuestion8] = useState('QuestionOne');
//   const [Question9, setQuestion9] = useState('QuestionOne');
//   const [Question10, setQuestion10] = useState('QuestionOne');
//   const [Question11, setQuestion11] = useState('QuestionOne');
//   const [Question12, setQuestion12] = useState('QuestionOne');
//   const [Question13, setQuestion13] = useState('QuestionOne');

//   const handleQuestion1 = (value) => {
//     setQuestion1(event.target.value);
//     console.log('Selected option:', event.target.value);
//   };

//   const handleQuestion2 = (value) => {
//     setQuestion2(event.target.value);
//     console.log('Selected option:', event.target.value);
//   };

//   return (
//     <div className=" mx-auto pt-36 border border-teal-950 w-80% bg-secondary text-red-50">
//       <div>
//         <fieldset className="m-5 ">
//           <legend className=" sr-only">Countries</legend>
//           <label className="flex text-2xl pb-4 ">* Qustions</label>
//           <div className="flex pr-20 pl-20 justify-around pt-3 ">
//             <div className="flex items-center mb-4">
//               <input
//                 id="country-option-1"
//                 type="radio"
//                 name="countries"
//                 defaultValue="USA"
//                 className="h-4 w-4 border-gray-300 focus:ring-2  focus:ring-blue-300"
//                 aria-labelledby="country-option-1"
//                 aria-describedby="country-option-1"
//                 defaultChecked=""
//                 onChange={()=> handleQuestion1()}
//               />
//               <label
//                 htmlFor="country-option-1"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 United States
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-2"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Germany"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-2"
//                 aria-describedby="country-option-2"
//                 onChange={()=> handleQuestion1()}

//               />
//               <label
//                 htmlFor="country-option-2"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Germany
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-3"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Spain"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-3"
//                 aria-describedby="country-option-3"
//                 onChange={()=> handleQuestion2()}

//               />
//               <label
//                 htmlFor="country-option-3"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Spain
//               </label>
//             </div>
//           </div>
//         </fieldset>
//         <hr />
//         <fieldset className="m-5 ">
//           <legend className=" sr-only">Countries</legend>
//           <label className="flex text-2xl pb-4 ">* Qustions</label>
//           <div className="flex pr-20 pl-20 justify-around pt-3 ">
//             <div className="flex items-center mb-4">
//               <input
//                 id="country-option-2"
//                 type="radio"
//                 name="qu"
//                 defaultValue="Selected Qustion 2 1"
//                 className="h-4 w-4 border-gray-300 focus:ring-2  focus:ring-blue-300"
//                 aria-labelledby="country-option-2"
//                 aria-describedby="country-option-2"
//                 defaultChecked=""
//                 onChange={()=> handleQuestion1()}
//               />
//               <label
//                 htmlFor="country-option-1"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 United States
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-2"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Germany"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-2"
//                 aria-describedby="country-option-2"
//               />
//               <label
//                 htmlFor="country-option-2"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Germany
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-3"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Spain"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-3"
//                 aria-describedby="country-option-3"
//               />
//               <label
//                 htmlFor="country-option-3"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Spain
//               </label>
//             </div>
//           </div>
//         </fieldset>
//         <hr />

//         <fieldset className="m-5 ">
//           <legend className=" sr-only">Countries</legend>
//           <label className="flex text-2xl pb-4 ">* Qustions</label>
//           <div className="flex pr-20 pl-20 justify-around pt-3 ">
//             <div className="flex items-center mb-4">
//               <input
//                 id="country-option-1"
//                 type="radio"
//                 name="countries"
//                 defaultValue="USA"
//                 className="h-4 w-4 border-gray-300 focus:ring-2  focus:ring-blue-300"
//                 aria-labelledby="country-option-1"
//                 aria-describedby="country-option-1"
//                 defaultChecked=""
//               />
//               <label
//                 htmlFor="country-option-1"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 United States
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-2"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Germany"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-2"
//                 aria-describedby="country-option-2"
//               />
//               <label
//                 htmlFor="country-option-2"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Germany
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-3"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Spain"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-3"
//                 aria-describedby="country-option-3"
//               />
//               <label
//                 htmlFor="country-option-3"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Spain
//               </label>
//             </div>
//           </div>
//         </fieldset>
//         <hr />
//         <fieldset className="m-5 ">
//           <legend className=" sr-only">Countries</legend>
//           <label className="flex text-2xl pb-4 ">* Qustions</label>
//           <div className="flex pr-20 pl-20 justify-around pt-3 ">
//             <div className="flex items-center mb-4">
//               <input
//                 id="country-option-1"
//                 type="radio"
//                 name="countries"
//                 defaultValue="USA"
//                 className="h-4 w-4 border-gray-300 focus:ring-2  focus:ring-blue-300"
//                 aria-labelledby="country-option-1"
//                 aria-describedby="country-option-1"
//                 defaultChecked=""
//               />
//               <label
//                 htmlFor="country-option-1"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 United States
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-2"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Germany"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-2"
//                 aria-describedby="country-option-2"
//               />
//               <label
//                 htmlFor="country-option-2"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Germany
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-3"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Spain"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-3"
//                 aria-describedby="country-option-3"
//               />
//               <label
//                 htmlFor="country-option-3"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Spain
//               </label>
//             </div>
//           </div>
//         </fieldset>
//         <hr />

//         <fieldset className="m-5 ">
//           <legend className=" sr-only">Countries</legend>
//           <label className="flex text-2xl pb-4 ">* Qustions</label>
//           <div className="flex pr-20 pl-20 justify-around pt-3 ">
//             <div className="flex items-center mb-4">
//               <input
//                 id="country-option-1"
//                 type="radio"
//                 name="countries"
//                 defaultValue="USA"
//                 className="h-4 w-4 border-gray-300 focus:ring-2  focus:ring-blue-300"
//                 aria-labelledby="country-option-1"
//                 aria-describedby="country-option-1"
//                 defaultChecked=""
//               />
//               <label
//                 htmlFor="country-option-1"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 United States
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-2"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Germany"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-2"
//                 aria-describedby="country-option-2"
//               />
//               <label
//                 htmlFor="country-option-2"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Germany
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-3"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Spain"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-3"
//                 aria-describedby="country-option-3"
//               />
//               <label
//                 htmlFor="country-option-3"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Spain
//               </label>
//             </div>
//           </div>
//         </fieldset>
//         <hr />
//         <fieldset className="m-5 ">
//           <legend className=" sr-only">Countries</legend>
//           <label className="flex text-2xl pb-4 ">* Qustions</label>
//           <div className="flex pr-20 pl-20 justify-around pt-3 ">
//             <div className="flex items-center mb-4">
//               <input
//                 id="country-option-1"
//                 type="radio"
//                 name="countries"
//                 defaultValue="USA"
//                 className="h-4 w-4 border-gray-300 focus:ring-2  focus:ring-blue-300"
//                 aria-labelledby="country-option-1"
//                 aria-describedby="country-option-1"
//                 defaultChecked=""
//               />
//               <label
//                 htmlFor="country-option-1"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 United States
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-2"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Germany"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-2"
//                 aria-describedby="country-option-2"
//               />
//               <label
//                 htmlFor="country-option-2"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Germany
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-3"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Spain"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-3"
//                 aria-describedby="country-option-3"
//               />
//               <label
//                 htmlFor="country-option-3"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Spain
//               </label>
//             </div>
//           </div>
//         </fieldset>
//         <hr />
//         <fieldset className="m-5 ">
//           <legend className=" sr-only">Countries</legend>
//           <label className="flex text-2xl pb-4 ">* Qustions</label>
//           <div className="flex pr-20 pl-20 justify-around pt-3 ">
//             <div className="flex items-center mb-4">
//               <input
//                 id="country-option-1"
//                 type="radio"
//                 name="countries"
//                 defaultValue="USA"
//                 className="h-4 w-4 border-gray-300 focus:ring-2  focus:ring-blue-300"
//                 aria-labelledby="country-option-1"
//                 aria-describedby="country-option-1"
//                 defaultChecked=""
//               />
//               <label
//                 htmlFor="country-option-1"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 United States
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-2"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Germany"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-2"
//                 aria-describedby="country-option-2"
//               />
//               <label
//                 htmlFor="country-option-2"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Germany
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-3"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Spain"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-3"
//                 aria-describedby="country-option-3"
//               />
//               <label
//                 htmlFor="country-option-3"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Spain
//               </label>
//             </div>
//           </div>
//         </fieldset>
//         <hr />
//         <fieldset className="m-5 ">
//           <legend className=" sr-only">Countries</legend>
//           <label className="flex text-2xl pb-4 ">* Qustions</label>
//           <div className="flex pr-20 pl-20 justify-around pt-3 ">
//             <div className="flex items-center mb-4">
//               <input
//                 id="country-option-1"
//                 type="radio"
//                 name="countries"
//                 defaultValue="USA"
//                 className="h-4 w-4 border-gray-300 focus:ring-2  focus:ring-blue-300"
//                 aria-labelledby="country-option-1"
//                 aria-describedby="country-option-1"
//                 defaultChecked=""
//               />
//               <label
//                 htmlFor="country-option-1"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 United States
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-2"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Germany"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-2"
//                 aria-describedby="country-option-2"
//               />
//               <label
//                 htmlFor="country-option-2"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Germany
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-3"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Spain"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-3"
//                 aria-describedby="country-option-3"
//               />
//               <label
//                 htmlFor="country-option-3"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Spain
//               </label>
//             </div>
//           </div>
//         </fieldset>
//         <hr />
//         <fieldset className="m-5 ">
//           <legend className=" sr-only">Countries</legend>
//           <label className="flex text-2xl pb-4 ">* Qustions</label>
//           <div className="flex pr-20 pl-20 justify-around pt-3 ">
//             <div className="flex items-center mb-4">
//               <input
//                 id="country-option-1"
//                 type="radio"
//                 name="countries"
//                 defaultValue="USA"
//                 className="h-4 w-4 border-gray-300 focus:ring-2  focus:ring-blue-300"
//                 aria-labelledby="country-option-1"
//                 aria-describedby="country-option-1"
//                 defaultChecked=""
//               />
//               <label
//                 htmlFor="country-option-1"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 United States
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-2"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Germany"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-2"
//                 aria-describedby="country-option-2"
//               />
//               <label
//                 htmlFor="country-option-2"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Germany
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ">
//               <input
//                 id="country-option-3"
//                 type="radio"
//                 name="countries"
//                 defaultValue="Spain"
//                 className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
//                 aria-labelledby="country-option-3"
//                 aria-describedby="country-option-3"
//               />
//               <label
//                 htmlFor="country-option-3"
//                 className="text-sm font-medium text-red-50 ml-2 block"
//               >
//                 Spain
//               </label>
//             </div>
//           </div>
//         </fieldset>
//       </div>

//       <div className="flex justify-center p-32">

//         <a   className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-yellow-200 focus:text-yellow-200 focus:bg-yellow-300   bg-yellow-300 font-semibold text-white  rounded-full">

//           Submit

//         </a>

//       </div>
//     </div>
//    )
//  }
//  export default Questions;

// import React, { useState } from 'react';
// import Question from '../components/Question';

// const Questions = () => {
//   const [selectedOption, setSelectedOption] = useState('option1');

//   const handleOptionChange = (value) => {
//     setSelectedOption(value);
//     console.log('Selected option:', value);
//   };

//   const optionOne = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
//   ]
//   const optionTwo = [
//     { value: 'option33', label: 'Option 13' },
//     { value: 'option23', label: 'Option 23' },
//     { value: 'option33', label: 'Option 33' },
//   ]
//   return (
//     <div>
//             <h3> Qustion One</h3>
//       <Question
//         options={optionOne}
//         selectedValue={selectedOption}
//         onChange={handleOptionChange}
//       />
//       <h3> Qustion Two</h3>
//       <Question
//         options={optionTwo}
//         selectedValue={selectedOption}
//         onChange={handleOptionChange}
//       />
//     </div>
//   );
// };

// export default Questions;
