'use client'
import { useState, useEffect } from 'react'
import { Button } from 'antd'
import CarouselH from '@/components/home/Carousel'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // use your loading page
    return <div className='hidden'></div>
  }
  return (
    <div>
      <CarouselH></CarouselH>
    </div>
  )
}
