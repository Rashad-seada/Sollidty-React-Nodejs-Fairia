import {Link} from "react-router-dom"

const Card = (props) => {

  const id = parseInt(props.id._hex).toString()
  

  console.log(id)

  const path = `/MyTender/${id}`
  return (
    <div className="max-w-sm bg-secondary border-secondary border-solid border-4 rounded-lg mb-20">
    <a href="#">
    <img
          src="https://freedesignfile.com/upload/2016/06/Simple-blueprint-building-vectors-design-05.jpg"
          className="h-20px w-20px object-cover"
        />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-sky-400 dark:text-white">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.description}</p>
           
    </div>
</div>
  );
};

export default Card;