
import PropTypes from 'prop-types';

const Carts = ({ carts, credit, cost }) => {
    console.log(carts);

    return (
        <div className="p-4 space-y-5 bg-slate-200/25 rounded-lg">
            <h1 className="text-2xl font-bold">Credit Hour Remaining <span className='text-orange-800'>{15 - credit}</span> hr</h1>
            <hr />
            <h2 className="text-2xl font-bold">Your Courses</h2>
            <hr />
            <div>
                {/* {
                    carts.map((cart, idx) => (<li className="text-xl font-semibold" key={idx}>{idx + 1}. {cart.title}</li>))
                 } */}
    
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className='text-xl'>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Credit</th>
                            </tr>
                        </thead>
                        <tbody className='text-xl'>
                           {
                                 carts.map((cart, idx) =>  
                                <tr key={idx}>
                                  <th>{idx + 1}</th>
                                  <td>{cart.title}</td>
                                  <td>{cart.price}</td>
                                  <td>{cart.credit}</td>
                                </tr>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <h3 className="text-2xl font-bold">Total Credit Hour : {credit} hr</h3>
            <hr />
            <h3 className="text-2xl font-bold">Total Price : {cost} USD</h3>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array,
    credit: PropTypes.number,
    cost: PropTypes.number
}

export default Carts;