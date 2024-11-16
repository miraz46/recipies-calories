import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import OurRecipies from './Components/OurRecipies'

function App() {

  return (
    <>
      <div className='w-4/5 mx-auto'>
        <div className='my-14'>
          <Navbar></Navbar>
        </div>
        <div className='mb-24'>
          <Banner></Banner>
        </div>
        <div>
          <OurRecipies></OurRecipies>
        </div>
      </div>
    </>
  )
}

export default App
