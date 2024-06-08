// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ApplicantCard from "./ApplicantsCard";
ApplicantCard;

const SingleCard = ({ title, description, name, price,ditails }) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div 
    className="bg-primary h-auto"
    >
      <div className=" pt-6">
        <div style={{ fontSize: "60px" }}>
          <p className="bg-slate-950 font-semibold flex justify-center text-cyan-50 py-10">
            {" "}
            Tender <span className="text-sky-400 px-3">Details</span>{" "}
          </p>
        </div>
        <div className="py-6 w-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 ">
            <div className="flex  md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div>
                  <div className="h-64 md:h-80 rounded-lg mb-4">
                    <img
                      src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
                      className=" relative z-10 rounded-3xl"
                      alt=""
                    />
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <template />
                  </div>
                </div>
              </div>
              <div className="md:flex-1 p-10 ">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-200 text-2xl md:text-3xl">
                  {title}
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    {name}
                  </a>
                </p>
                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-xl bg-secondary flex py-3 px-3">
                      <span className="text-indigo-400 mr-1 mt-1 text-2xl font-semibold">
                        Ether
                      </span>
                      <span className="font-bold text-white text-3xl">
                        {"   " + price}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500">{description}</p>
                <div className="flex py-4">
                  <div className="relative"></div>
                  <Link
                    to={`/apply-tender/${id}`}
                    type="button"
                    className=" lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 bg-yellow-300 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-primary rounded-full"
                    role="button"
                  >
                    Apply now
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div >
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>
          <ApplicantCard ditails={ditails}/>

        </div>

<div className="h-36"></div>


      </div>
       </div>
  );
};

export default SingleCard;
