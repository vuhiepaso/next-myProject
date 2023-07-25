import React from 'react'
import { Carousel } from 'antd'
import styled from 'styled-components'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  // autoplay: true,
}

type ICarousel = {
  elements: React.JSX.Element[]
}

const CarouselH = ({ elements }: ICarousel) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <Template>
      <Carousel {...settings} afterChange={onChange}>
        {elements &&
          elements.map((element, index) => (
            <div key={index}>
              <div className='box-item'>{element}</div>
            </div>
          ))}
      </Carousel>
    </Template>
  )
}
export default CarouselH
// STYLE
const Template = styled.div`
  .slick-dots {
    position: fixed;
    margin-left: 10px;
    min-height: 300px;
  }
  .slick-dots li {
    height: 60px !important;
  }
  .slick-dots li button {
    height: 60px !important;
    background-color: #727479;
    width: 30px;
  }
  .slick-dots li button::after {
    margin-top: 1px;
    background-color: #3a3a3a;
  }
  .box-item {
    margin: 0 0 2px 0;
    height: 80vh;
    color: #fff;
    text-align: center;
    background: #9ea1a8;
    /* border-radius: 4rem; */
    /* padding: 2%; */
  }
`
