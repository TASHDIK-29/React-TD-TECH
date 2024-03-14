import { useEffect, useState } from "react";

const Carts = ({ carts }) => {
    console.log(carts);

    const [cost, setCost] = useState(0);
    const [credit, setCredit] = useState(0);

    useEffect(() => {
        let newCost = 0;
        let newCredit = 0;
        for (const cart of carts) {
            let priceNumber = parseFloat(cart.price);
            let creditNumber = parseFloat(cart.credit);
            newCost = newCost + priceNumber;
            newCredit = newCredit + creditNumber;
        }
        
        setCost(newCost);
        setCredit(newCredit);
    },[carts])

    // const [credit, setCredit] = useState(0);

    // useEffect(() => {
    //     let newCredit = 0;
    //     for (const cart of carts) {
    //         let creditNumber = parseFloat(cart.credit);
    //         newCredit = newCredit + creditNumber;
    //     }
        
    //     setCredit(newCredit);
    // },[carts])

    return (
        <div className="p-4 space-y-5 bg-slate-200/25 rounded-lg">
            <h1 className="text-2xl font-bold">Credit Hour Remaining 7 hr</h1>
            <hr />
            <h2 className="text-2xl font-bold">Course Name</h2>
            <hr />
            <div>
                <ul>
                    {
                        carts.map((cart, idx) => (<li className="text-xl font-semibold" key={idx}>{idx+1}. {cart.title}</li>))
                    }
                </ul>
            </div>
            <hr />
            <h3 className="text-2xl font-bold">Total Credit Hour : {credit}</h3>
            <hr />
            <h3 className="text-2xl font-bold">Total Price : {cost} USD</h3>
        </div>
    );
};

export default Carts;