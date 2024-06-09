function ApplicantCard({ ditails, from }) {
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

          
            <div className=" ">
            <div className=" pl-10">
                <h3 className="pb-1 text-sky-400"> from</h3>
                <p className="pb-1 text-yellow-300"> Applicant</p>
              
            </div>
         
           <div className=" pt-4 pl-0">
           <h1 className="pb-1 text-white"> Title</h1>
             <p className=" text-gray-600">description</p>
           </div>
        </div>


      </div>
    </>
  );
}

export default ApplicantCard;
