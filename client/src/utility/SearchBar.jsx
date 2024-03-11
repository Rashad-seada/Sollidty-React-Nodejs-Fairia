import React from 'react'

function SearchBar() {
  return (
    <>
    <div className=" flex items-center justify-center" style={{padding:"100px"}}>

      <div className="flex rounded-full bg-slate-950 px-2 w-400px " style={{border:"solid 2px rgb(8,184,247)",width:"800px",backgroundColor:"rgb(12,5,51)"}}>
       
        <input
          type="text"
          className="w-full bg-slate-950 flex rounded-lg pl-2 text-sky-600 outline-0"
          placeholder="Search Of Tunder"
          style={{backgroundColor:"rgb(12,5,51)"}}
        />
        <button type="submit" className="relative p-2 bg-[#0d1829] rounded-full">

          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#999"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  </>
  
  )
}

export default SearchBar
