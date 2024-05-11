const Card = (props) => {


  return (

   

    <div className=" bg-secondary  rounded-2xl mb-20 hover:bg-slate-950   shadow-sky-500 shadow-md hover:animate-pulse text-sky-50"   
    style={{ width: "30%", height: "500px" }}>
    <div

    >
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
      </div>
    </div>
    
  </div>

  );
};

export default Card;