import Carousel from 'react-material-ui-carousel';
import testimage from './testimage.jpg'
import './ImageCarousel.css'

function ImageCarousel() {


  return (
    <>
    
      <Carousel
        navButtonsAlwaysInvisible={true}
        autoPlay={false}
        className="carousel"
        animation="slide"
        indicatorIconButtonProps={{
          style: {
            padding: '3px', // 1
            color: 'white'       // 3
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: 'black',
            width: '15px',
            height: '15px' // 2
          }
        }}
        indicatorContainerProps={{
          style: {
            position: 'absolute',
            bottom: '20px', 
            zIndex: 1,

          }

        }}
      >
        <img src={testimage} alt="Slide 1" />
        <img src="https://www.tiny.nl/_next/image?url=https%3A%2F%2Fwww.tiny.nl%2Fmedia%2Fmorus-1.jpg&w=2560&q=75" alt="Slide 1" />
        <img src="https://www.tiny.nl/_next/image?url=https%3A%2F%2Fwww.tiny.nl%2Fmedia%2Fmorus-2.jpg&w=1920&q=75" alt="Slide 2" />
        <img src="https://www.tiny.nl/_next/image?url=https%3A%2F%2Fwww.tiny.nl%2Fmedia%2Fmorus-4.jpg&w=1920&q=75" alt="Slide 3" />
        <img src="https://www.tiny.nl/_next/image?url=https%3A%2F%2Fwww.tiny.nl%2Fmedia%2Fmorus-3.jpg&w=1920&q=75" alt="Slide 4" />
      </Carousel>


    </>
  )
}

export default ImageCarousel
