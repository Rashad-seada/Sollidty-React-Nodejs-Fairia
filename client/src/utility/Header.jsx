import NavBar from "./NavBar";
const Header = ()=> {

    return (
        <>
  {/* component */}
  <div className="w-full">
    
    <NavBar />
    <div className="flex bg-slate-950" style={{ height: 600 }}>
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <p className="text-8xl font-semibold text-slate-50 ">
            Select Your  <span className="text-sky-400"> Contractor</span>
          </p>
          <p className="  mt-7 mb-10 text-lg text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            commodi cum cupiditate ducimus, fugit harum id necessitatibus odio
            quam quasi, quibusdam rem tempora voluptates. Cumque debitis
            dignissimos id quam vel!
          </p>
           
            
              <a
              className= "rounded-full w-50px bg-sky-400 border-r-6  text-black  hover:bg-blue-700 hover:text-cyan-50 hover:font-medium py-4 px-6 md:mx-2"
              href="/ExploreTender"
              >
                Explore Tender
              </a>
            
          </div>
        
      </div>
      <div
        className="hidden lg:block lg:w-1/2"
        style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >

        <div
          className="h-full object-cover"
          style={{
            backgroundImage:

              "url(https://th.bing.com/th/id/OIP.u8u-1yyEK9xIZrsesPpbDwHaE8?rs=1&pid=ImgDetMain)"

               }}
        >
          <div className="h-full  bg-red-200 opacity-25" />
          <img src="../image//home-img.jpg" alt="Emage " className="w-500px h-500px" />

        </div>
      </div>
    </div>
  </div>
  
</>

    );

}

export default Header;