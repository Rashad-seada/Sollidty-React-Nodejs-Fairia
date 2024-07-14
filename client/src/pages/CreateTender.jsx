import React, { useContext, useState } from "react"; // eslint-disable-next-line no-unused-vars
import NavBar from "../components/NavBar";
import { TenderAppContext } from "../context/TenderAppContext";
import { ethers } from "ethers";

function CreateTender() {
  const [From, setFrom] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [BidBond, setBidBond] = useState("");
  const [prequalification, setprequalification] = useState("");
  const [BidSubmission, setBidSubmission] = useState("");
  const [ContractSign, setContractSign] = useState("");
  const [EstimatedProgect, setEstimatedProgect] = useState("");
  const [KeyWord, setKeyWord] = useState("");
  const [Image, setImage] = useState("");
  const [Price, setprice] = useState("");
  const [duration, setduration] = useState("");
  const [Present, setPresent] = useState("");
  const [Quantity, setQuantity] = useState("");
  // const[Classification,setClassification]=useState("")
  const { createTender } = useContext(TenderAppContext);

  //ethers.utils.formatBytes32String("Another Bid Bond")

  async function onSubmit() {
    try {
      // Convert strings to numbers where necessary
      const prequalificationDeadline =
        ethers.utils.formatBytes32String(prequalification);
      const bidSubmissionDeadline =
        ethers.utils.formatBytes32String(BidSubmission);
      const contractSignDeadline =
        ethers.utils.formatBytes32String(ContractSign);
      const estimatedProjectCost =
        ethers.utils.formatBytes32String(EstimatedProgect);

      // Call createTender function with the converted parameters
      await createTender(
        From,
        Title,
        Description,
        BidBond,
        prequalificationDeadline,
        bidSubmissionDeadline,
        contractSignDeadline,
        estimatedProjectCost,
        KeyWord
      );
    } catch (error) {
      const errorMessage = error.reason
        ? error.reason
        : "An error occurred. Please try again later.";

      alert(errorMessage);
    }
  }
  function handelFormValue(event) {
    setFrom(event.target.value);
    console.log(event.target.value);
  }
  function handelTitleValue(event) {
    setTitle(event.target.value);
    console.log(event.target.value);
  }
  function handelDescriptionValue(event) {
    setDescription(event.target.value);
    console.log(event.target.value);
  }
  function handelBidBondValue(event) {
    setBidBond(event.target.value);
    console.log(event.target.value);
  }
  function handelprequalificationValue(event) {
    setprequalification(event.target.value);
    console.log(event.target.value);
  }
  function handelBidSubmissionValue(event) {
    setBidSubmission(event.target.value);
    console.log(event.target.value);
  }
  function handelEstimatedProgectValue(event) {
    function handelContractSignValue(event) {
      setContractSign(event.target.value);
      console.log(event.target.value);
    }
    setEstimatedProgect(event.target.value);
    console.log(event.target.value);
  }
  function handelprice(event) {
    setprice(event.target.value);
    console.log(event.target.value);
  }
  function handelduration(event) {
    setduration(event.target.value);
    console.log(event.target.value);
  }
  function handelPresent(event) {
    setPresent(event.target.value);
    console.log(event.target.value);
  }
  function handelKeyWordValue(event) {
    setKeyWord(event.target.value);
    console.log(event.target.value);
  }

  function handelImage(event) {
    setImage(event.target.value);
    console.log(event.target.value);
  }

  function handelQuantity(event) {
    setQuantity(event.target.value);
    console.log(event.target.value);
  }

  // function handelClassification(event) {
  //   setClassification(event.target.value);
  //     console.log(event.target.value);
  //   }
  return (
    <React.Fragment>
      <div
        onSubmit={(e) => e.preventDefault()}
        className="bg-slate-950  text-sky-400 flex min-h-screen w-80% flex-col items-center pt-16  sm:justify-center sm:pt-0"
      >
        <a href="#">
          <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
            <div className="text-slate-50 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                />
              </svg>
            </div>
            <div style={{ fontSize: "80px" }}>
              <p className="bg-slate-950 font-semibold flex justify-center py-20 text-cyan-50">
                {" "}
                Create<span className="text-sky-400 px-3">Tender</span>{" "}
              </p>
            </div>
          </div>
        </a>
        <div className="relative mt-12 pb-20 w-full max-w-4xl sm:mt-10 ">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
          <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="text-sky-400 flex flex-col p-6 ">
              <h3 className=" text-xl font-semibold leading-6 tracking-tighter">
                Create New Tender
              </h3>
              <p className="mt-1.5 text-sm font-medium text-sky-100">
                Welcome back, enter your Tender.
              </p>
            </div>
            <div className="p-6 pt-0">
              <form action="">
                <div>
                  <div className="mt-4">
                    <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                      <div className="flex justify-between">
                        <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                          From
                        </label>
                      </div>
                      <input
                        value={From}
                        onChange={handelFormValue}
                        type="text"
                        name="Title"
                        placeholder="The Tendring Entity"
                        className="     w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        style={{ backgroundColor: "#0000" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                        Title
                      </label>
                    </div>
                    <input
                      value={Title}
                      onChange={handelTitleValue}
                      type="text"
                      name="Title"
                      placeholder="Enter Tinder Title"
                      className="     w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      style={{ backgroundColor: "#0000" }}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                        Description
                      </label>
                    </div>
                    <input
                      value={Description}
                      onChange={handelDescriptionValue}
                      type="text"
                      name="Title"
                      placeholder="Enter Tender Description"
                      className="     w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      style={{ backgroundColor: "#0000" }}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                        Bid Bond (E$):
                      </label>
                    </div>
                    <input
                      value={BidBond}
                      onChange={handelBidBondValue}
                      type="text"
                      name="Title"
                      placeholder="Tinder Big Bond"
                      className="     w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      style={{ backgroundColor: "#0000" }}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                        pre-qualification Deadline
                      </label>
                    </div>
                    <input
                      value={prequalification}
                      onChange={handelprequalificationValue}
                      type="date"
                      name="Title"
                      placeholder="Tender prequalification"
                      className="     w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      style={{ backgroundColor: "#0000" }}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500 ">
                        Bid submission deadline
                      </label>
                    </div>
                    <input
                      value={BidSubmission}
                      onChange={handelBidSubmissionValue}
                      type="text"
                      name="Title"
                      placeholder="Enter Tender Bid Submission"
                      className="     w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      style={{ backgroundColor: "#0000" }}
                    />
                  </div>
                </div>

               
                <div className="mt-4">
                  <div>
                    <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                      <div className="flex justify-between">
                        <label className="  text-xs font-medium text-muted-foreground group-focus-within:text-sky-500">
                        Bill of Quantity (BOQ)
                        </label>
                        <input
                          value={Quantity}
                          onChange={handelQuantity}
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div>
                    <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                      <div className="flex justify-between">
                        <label className="  text-xs font-medium text-muted-foreground group-focus-within:text-sky-500">
                          Estimated Project Cost
                        </label>
                      </div>
                      <div className=" flex items-center">
                        <input
                          value={EstimatedProgect}
                          onChange={handelEstimatedProgectValue}
                          type="text"
                          name="Location"
                          placeholder="Enter Estimated Progect"
                          className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                          style={{ backgroundColor: "#0000" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div>
                    <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                      <div className="flex justify-between">
                        <label className="  text-xs font-medium text-muted-foreground group-focus-within:text-sky-500">
                          Key Word
                        </label>
                      </div>
                      <div className=" flex items-center">
                        <input
                          value={KeyWord}
                          onChange={handelKeyWordValue}
                          type="text"
                          name="Location"
                          placeholder=" Key-word Help to find Tender"
                          className=" bg-secondary block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div>
                    <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                      <div className="flex justify-between">
                        <label className="  text-xs font-medium text-muted-foreground group-focus-within:text-sky-500">
                          Project drawing
                        </label>
                        <input
                          value={Image}
                          onChange={handelImage}
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>
{/*
N
E
W
*/}
                <div className="mt-4">
                  <div>
                    <div className="group  relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                      <div className="flex justify-between">
                        <label className="  text-xs font-medium text-muted-foreground group-focus-within:text-sky-500">
                          Expected price
                        </label>
                        <input
                          className="bg-secondary w-72  border border-sky-300"
                          value={Price}
                          onChange={handelprice}
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div>
                    <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                      <div className="flex justify-between">
                        <label className="  text-xs font-medium text-muted-foreground group-focus-within:text-sky-500">
                          Expected duration
                        </label>
                        <input
                          className="bg-secondary w-72  border border-sky-300"
                          value={duration}
                          onChange={handelduration}
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div>
                    <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
                      <div className="flex justify-between">
                        <label className="  text-xs font-medium text-muted-foreground group-focus-within:text-sky-500">
                          Expected Net Present Value
                        </label>
                        <input
                          className="bg-secondary w-72 border border-sky-300"
                          value={Present}
                          onChange={handelPresent}
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-10 flex items-center justify-around  gap-x-2 animate-pulse">
                  <button
                    onClick={() => onSubmit()}
                    className="bg-ter  text-black inline-flex items-center justify-center rounded-3xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                  >
                    Create A New Tender
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateTender;
