// App.tsx
import ButtonBar from '../components/ButtonBar/ButtonBar'
import ConfigSidebar from '../components/ConfigSidebar/ConfigSidebar'
import ImageCarousel from '../components/ImageCarousel/ImageCarousel'
import CNavbar from '../components/Navbar/CNavbar'
import Utilitybar from '../components/Utilitybar/Utilitybar'
import './App.css'
import React, { useState } from 'react';

function App() {
  const [currentImage, setCurrentImage] = useState<string>('https://i.ibb.co/j8bm8d4/Whats-App-Image-2023-06-20-at-18-04-43.jpg');
  

  const handleImageChange = (newImage: string) => {
    setCurrentImage(newImage);
    console.log("called" + newImage)
  }

  return (
    <>
      <CNavbar />
      <Utilitybar />
      {/* <ButtonBar /> */}
      <div id="configcontainer">
        <ImageCarousel currentImage={currentImage} />
        <ConfigSidebar onImageChange={handleImageChange} />
      </div>
    </>
  )
}

export default App;