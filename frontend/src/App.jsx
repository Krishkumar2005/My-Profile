
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  
  return (
     <div className='min-h-screen min-w-full '>
      <div className='w-full h-full flex flex-col items-center justify-center
     '>
       <Navbar/>
        <main className='pt-24 flex justify-center w-full'>
          <Outlet />
        </main>
        
      </div>
    </div>
  )
}

export default App
