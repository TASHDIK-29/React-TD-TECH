import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cost, setCost] = useState(0);
  const [credit, setCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(15);


  const [carts, setCarts] = useState([]);


  const handelSelect = course => {
    
    // console.log(course);
    const isExist = carts.find(cart => cart.id === course.id);

    if (!isExist) {
     
      if(remainingCredit !== 0 && remainingCredit >= course.credit )
      {
        const newCarts = [...carts, course];
        setCarts(newCarts);

        toast.success(`${course.title} Successfully Added`);

        const newCredit = parseFloat(course.credit)
        
        setRemainingCredit(remainingCredit - newCredit);
        setCredit(credit + newCredit);

        const newCost = parseFloat(course.price);
        setCost(cost + newCost);
      }
      else{
        return toast.error(`Course Credit Exceed`);

    }
    }
    else {
      toast.warning(`${course.title} Already Selected`);
    }
        
  }


  return (
    <>
      <Header></Header>
      <main className='mt-5 container mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>OFFERING COURSES</h1>
        </div>
        <div className='flex justify-between gap-3'>
          <div className='w-3/5'>
            <Courses handelSelect={handelSelect}></Courses>
          </div>
          <div className='w-2/5'>
            <Carts carts={carts} credit={credit} cost={cost}></Carts>
          </div>
        </div>
        <ToastContainer />
      </main>
    </>
  )
}

export default App
