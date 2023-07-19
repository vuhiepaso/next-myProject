import React from 'react'
import { Carousel } from 'antd'

const contentStyle: React.CSSProperties = {
  margin: '0 0 2px 0',
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
}

const CarouselH: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <Carousel {...settings} afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

export default CarouselH
