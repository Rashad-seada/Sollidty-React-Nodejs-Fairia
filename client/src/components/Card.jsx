const Card = (props) => {


  return (

   


    <div className=" bg-secondary  rounded-2xl mb-20 hover:bg-slate-950   shadow-sky-500 shadow-md hover:animate-pulse text-sky-50"   
    style={{ width: "30%", height: "500px" }}>
    <div>
      <img
        src="https://th.bing.com/th/id/R.a884255218bf3b69f99f3f29b6aa6811?rik=5cUFUKa6nV%2bimA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f0%2f1%2f5%2f360640.jpg&ehk=fZVfMYWrQbtvMHhFHu%2bhiJvImfLtj7kQPXC59N4dtnY%3d&risl=&pid=ImgRaw&r=0"
        className="h-20px w-20px object-cover rounded-xl py-1"
      />

      <div className="p-6">
        <p className=" mb-3 block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          {props.title}
        </p>

        <p className="block font-sans text-sm font-normal leading-normal text-sky-400 antialiased opacity-75">
          {props.desc}
        </p>
      </div>

      <div className="p-6 pt-0 ">
        <a
          href="/SingleCard"
          className=" block w-full select-none bg-sky-600 text-sky-50  rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900  "
          type="button"
        >
   
            Hair me
            </a>
   
    <div class="max-w-sm bg-secondary border-secondary border-solid border-4 rounded-lg mb-20">
    <a href="#">
    <img
          src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
          className="h-20px w-20px object-cover"
        />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-sky-400 dark:text-white">{props.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.description}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-ter rounded-lg hover:bg-ter focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ter dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>
  );
};

export default Card;