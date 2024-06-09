function ApplicantCard({ description, from ,Applicant,Title}) {
  return (
    <>
      {/* component */}
      {/* This is an example component */}
      <div className="flex flex-wrap  max-w-2xl ml-44 mt-20 bg-secon p-5 border border-sky-700 rounded-sm">
        <div className="relative w-10 h-10 overflow-hidden bg-primary rounded-full dark:bg-gray-600">

          <svg
            className="absolute w-12 h-12 text-sky-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

          
            <div className="text-red-700 ">
            <div className=" pl-10">
            <p> {Applicant}</p>
                <h3> {from}</h3>
            </div>
         
           <div className="text-red-600 pt-4  -left-1">
           <h1> {Title}</h1>
             <p className=" text-white">{description}</p>
           </div>
        </div>


      </div>
    </>
  );
}

export default ApplicantCard;
