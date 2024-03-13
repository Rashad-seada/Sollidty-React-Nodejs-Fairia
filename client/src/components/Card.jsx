
const Card = (card) => {
  return (
    <>

      <div className="  relative flex w-96 flex-col rounded-2xl bg-slate-950   shadow-md text-slate-50 " style={{border:"solid 2px blue",marginBottom:"60px"}}>

        <div
          className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl   bg-slate-950 bg-clip-border "
          style={{height: "300px"}}>
          <img
            src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
            className="h-20px w-20px object-cover"
          />
        </div>

        <div className="p-6">
          <p className=" mb-3 block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {card.title}
          </p>

          <p className="block font-sans text-sm font-normal leading-normal text-sky-400 antialiased opacity-75">
            {card.info}
          </p>
        </div>

        <div className="p-6 pt-0 ">
          <button
            className=" block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            style={{background:"blue"}}
          >
            Viwe All Tender
          </button>
        </div>
      </div>

      {/* {data.map(Card => (
            <Card key={Card.id} {...Card}  />
          ))} */}

    </>
  );
};

export default Card;
