

const Card = (props) => {


  return (

   

    <div className="max-w-sm bg-secondary border-secondary border-solid border-4 rounded-lg mb-20">
    <a href="#">
    <img
          src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
          classNameName="h-20px w-20px object-cover"
        />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-sky-400 dark:text-white">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-ter rounded-lg hover:bg-ter focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ter dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  );
};

export default Card;