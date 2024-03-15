const Card = (card) => {


  return (

   

<div class="max-w-sm bg-secondary border-secondary border-solid border-4 rounded-lg mb-20">
    <a href="#">
    <img
          src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
          className="h-20px w-20px object-cover"
        />
<<<<<<< HEAD
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
        <a
          href="/TenderPage"
          className=" block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
          type="button"
          style={{ background: "blue" }}
          
        >
          Viwe All Tender
        </a>
      </div>
=======
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-sky-400 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-ter rounded-lg hover:bg-ter focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ter dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
>>>>>>> 06f95b65f9c1a84fd5e3bd2c0e3e593573febf47
    </div>
</div>

  );
};

export default Card;

