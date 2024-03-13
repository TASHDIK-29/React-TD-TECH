

import './App.css'
import Carts from './components/Carts/Carts'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      <Header></Header>
      <main className='mt-5 container mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>OFFERING COURSES</h1>
        </div>
        <div className='flex justify-between gap-3'>
          <div className='w-3/4'>
            <Courses></Courses>
          </div>
          <div className='w-1/4'>
            <Carts></Carts>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
