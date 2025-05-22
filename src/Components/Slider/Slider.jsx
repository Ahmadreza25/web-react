import React , {useState} from 'react'
import products from '../../Data/DataSlider';
import DivContainer from './StyledSlider/DivContainer';
import DivContent from './StyledSlider/DivContent';
import DivItem from './StyledSlider/DivItem';
import DivMargin from './StyledSlider/DivMarginjsx';
import Img from './StyledSlider/Img';
import P from './StyledSlider/P';
import H5 from './StyledSlider/H5';
import './Slider.css'



const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      if (currentIndex < products.length - 3) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };
  
    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    };
    const currentProducts = products.slice(currentIndex, currentIndex + 3);
    return (
      <DivContainer>
        <DivContent>
            {currentProducts.map((product) => (
            <DivItem key={product.id}>
                <Img
                  src={product.img}
                  alt={product.name}
                  width='200px'
                />
              <DivMargin margintop='10px'>
                <H5>{product.name}</H5>
                <P margintop='12px' marginright='10px' text='right' font='14px' color='#959595'>{product.title}</P>
                <P margintop='-12px' marginright='10px' text='right' font='14px' color='#959595'>تجهیزات قهوه</P>
                <P margintop="-10px" marginleft='10px' text='left' font='12px' className="price">{product.price}</P>
              </DivMargin>
            </DivItem>
          ))}
        </DivContent>
        <button onClick={prevSlide} className="slider-button prev-button">⟨</button>
        <button onClick={nextSlide} className="slider-button next-button">⟩</button>
      </DivContainer>
    );
}

export default Slider