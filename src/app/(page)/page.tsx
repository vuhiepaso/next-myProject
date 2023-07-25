'use client'
import CarouselH from '@/components/home/Carousel'
import Banner from '@/components/banner'
import AirConditional from '@/components/banner/airConditional'
import Videos from '@/components/banner/video'

export default function Home() {
  const elements = [
    <Banner key={'Banner'} />,
    <Videos key={'Videos'} />,
    <AirConditional key={'AirConditional'} />,
    <>4</>,
  ]
  return (
    <div>
      <CarouselH elements={elements} />
    </div>
  )
}
