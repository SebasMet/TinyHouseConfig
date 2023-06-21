import Carousel from 'react-material-ui-carousel';
import testimage from './testimage.jpg'
import './ImageCarousel.css'
import React from 'react';

interface Props {
  currentImage: string;
}

const ImageCarousel: React.FC<Props> = ({ currentImage }) => {
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',  // or 'contain' if you want to see the whole image
  };

  return (
    <>    
      <Carousel
        navButtonsAlwaysInvisible={true}
        autoPlay={false}
        className="carousel"
        animation="slide"
        indicatorIconButtonProps={{
          style: {
            padding: '3px',
            color: 'white'
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: 'black',
            width: '15px',
            height: '15px'
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
        <img src={currentImage} alt="Window preview" style={imageStyle}/>
        <img src="https://i.ibb.co/r3Ry6tw/window1.jpg" alt="Window 1" style={imageStyle}/>
        <img src="https://i.ibb.co/fptm6Wr/window2.jpg" alt="Window 2" style={imageStyle}/>
        <img src="https://i.ibb.co/tBsZWmh/window3.jpg" alt="Window 3" style={imageStyle}/>
        <img src="https://i.ibb.co/qsPm2Lw/window4.jpg" alt="Window 4" style={imageStyle}/>
        <img src="https://i.ibb.co/qmXW2Vk/window5.jpg" alt="Window 5" style={imageStyle}/>
        <img src="https://i.ibb.co/1LSKfjq/window6.jpg" alt="Window 6" style={imageStyle}/>
        <img src="https://i.ibb.co/b1TJcY1/window7.jpg" alt="Window 7" style={imageStyle}/>
        <img src="https://i.ibb.co/gMh1SF0/roof.jpg" alt="Roof" style={imageStyle}/>
        <img src="https://i.ibb.co/9pmwLC0/ZZFloor.jpg" alt="Floor" style={imageStyle}/>
        <img src="https://i.ibb.co/sFHLrwN/ZZVertical.jpg" alt="Vertical" style={imageStyle}/>
        <img src="https://i.ibb.co/kGSZRD4/ZZWall-Ceiling.jpg" alt="Wall-Ceiling" style={imageStyle}/>

      </Carousel>
    </>
  )
}

export default ImageCarousel;
