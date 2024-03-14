import { TbCurrencyDollar } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ course ,handelSelect}) => {
    // console.log(course);
    const { id, title, cart_img, description, price, credit } = course;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={cart_img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between items-center w-full text-lg">
                        <TbCurrencyDollar />
                        <h3>Price : {price}</h3>
                        <IoBookOutline />
                        <h3>Credit : {credit}</h3>
                    </div>
                    <div className="card-actions w-full">
                        <button onClick={() => handelSelect(course)} className="btn btn-primary w-full text-lg font-bold">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;