import React, {useState} from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import './CarruselHome.scss'  
  
  const items = [
    {
      src: 'https://images.pexels.com/photos/7487360/pexels-photo-7487360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      altText: 'Slide 1'
      
    },
    {
      src: 'https://images.pexels.com/photos/4820817/pexels-photo-4820817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      altText: 'Slide 2'
      
    },
    {
      src: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      altText: 'Slide 3'
      
    }
  ];
  


const CarruselHome = () => {

    
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText="Descubre los mejores sabores del cafe!" captionHeader="Bienvenido a Chiarelli Coffee" />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="" onClickHandler={next} />
      </Carousel>
    );
  }

export default CarruselHome
