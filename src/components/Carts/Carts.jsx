import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

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

        if (newCredit <= 15) {
            setCost(newCost);
            setCredit(newCredit);

        }
        else{
            return alert('Credit Limit Exceed');

        }
    }, [carts])



    return (
        <div className="p-4 space-y-5 bg-slate-200/25 rounded-lg">
            <h1 className="text-2xl font-bold">Credit Hour Remaining {15 - credit} hr</h1>
            <hr />
            <h2 className="text-2xl font-bold">Course Name</h2>
            <hr />
            <div>
                <ul>
                    {
                        carts.map((cart, idx) => (<li className="text-xl font-semibold" key={idx}>{idx + 1}. {cart.title}</li>))
                    }
                </ul>
            </div>
            <hr />
            <h3 className="text-2xl font-bold">Total Credit Hour : {credit} hr</h3>
            <hr />
            <h3 className="text-2xl font-bold">Total Price : {cost} USD</h3>
        </div>
    );
};

Carts.propTypes={
    carts : PropTypes.array
}

export default Carts;