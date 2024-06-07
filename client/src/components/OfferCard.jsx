// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
function OfferCard({title,description} ) {
  
  // const {id} = useParams ();
  // console.log(id)
  return (
    <>
 <div style={{fontSize:"80px"}}>
          <p className=" font-semibold flex justify-center text-cyan-50 py-10"> My<span className="text-yellow-600 px-3">Offers</span> </p>
        </div>
 <div className="flex min-h-screen items-center justify-center flex-wrap  ">
          <div className="relative flex max-w-[80%]  p-200 flex-row rounded-xl bg-secondary bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0  p-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="mb-2 block pb-9 pt-10 font-sans text-3xl font-semibold leading-snug tracking-normal text-sky-400 antialiased">
                {/* Lyft launching cross-platform service this week */}
                {title}
              </h4>
              <p className="mb-4 block font-sans pb-5 text-base font-normal leading-relaxed text-gray-50 antialiased">
                {/* Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story */}
                {description}
              </p>
              <a className="flex justify-center pt-32 pl-96" href="#">
                <Link
                  to={`/MyOffers`}
                  className="inline-flex items-center w-40  p-3 text-xl font-medium text-center text-black bg-ter rounded-lg hover:bg-ter focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ter dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 p-1 size-10 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </a>
            </div>
          </div>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
          />



{/* <div className="relative flex max-w-[80%]  p-200 flex-row rounded-xl bg-secondary bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0  p-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
             
              <h4 className="mb-2 block pb-9 pt-10 font-sans text-3xl font-semibold leading-snug tracking-normal text-sky-400 antialiased">
                Lyft launching cross-platform service this week
              </h4>
              <p className="mb-4 block font-sans pb-5 text-base font-normal leading-relaxed text-gray-50 antialiased">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story
              </p>
              <a className="flex justify-center pt-32 pl-96" href="#">
                <Link
                  to={`/MyOffers`}
                  className="inline-flex items-center w-40  p-3 text-xl font-medium text-center text-black bg-ter rounded-lg hover:bg-ter focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ter dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 p-1 size-10 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </a>
            </div>
          </div>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
          /> */}
</div>
</>
  )
}
export default OfferCard