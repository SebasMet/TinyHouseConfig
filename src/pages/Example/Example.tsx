import Carousel from 'react-material-ui-carousel';
import image1 from './image1.jpg'
import image2 from './image2.jpg'

function Example() {


    return (
        <>
            <Carousel>
                <img src={image1} alt="Slide 1" />
                <img src={image2} alt="Slide 2" />
           
            </Carousel>


        </>
    )
}

export default Example
