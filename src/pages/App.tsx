import ConfigSidebar from '../components/ConfigSidebar/ConfigSidebar'
import ImageCarousel from '../components/ImageCarousel/ImageCarousel'
import CNavbar from '../components/Navbar/CNavbar'
import Utilitybar from '../components/Utilitybar/Utilitybar'
import './App.css'


function App() {
  
  

  return (
    <>
      <CNavbar />
      <Utilitybar />
      <div id="configcontainer">
        <ImageCarousel />
        <ConfigSidebar />
      </div>

    </>
  )
}

export default App
