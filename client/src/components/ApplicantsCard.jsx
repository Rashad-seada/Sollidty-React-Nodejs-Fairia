function ApplicantCard({ditails}){


    return (
      <>
      {/* component */}
      {/* This is an example component */}
      <div className="max-w-2xl ml-44 mt-20 bg-primary p-5 border border-sky-700 rounded-sm">
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
        <p className="mt-5 text-white">
          {ditails}
         
        </p>
      </div>
    </>
    

    )
}

export default ApplicantCard;