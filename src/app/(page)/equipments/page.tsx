'use client'
import {
  CarOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { useEffect } from 'react'
import styled from 'styled-components'

import { database } from '@/Cloud/firebase'
import { onValue, ref, update } from 'firebase/database'

export default function Equipments() {
  let keyPressed = ''
  const dbRef = ref(database, 'carOne')
  onValue(
    dbRef,
    (snapshot) => {
      const data = snapshot.val()
      console.log('Data from Firebase:', data)
    },
    {
      onlyOnce: true, // Chỉ lắng nghe một lần (không lắng nghe liên tục)
    }
  )
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (keyPressed != event.key) {
        keyPressed = event.key
        directional(event.key)
      }
    }
    const handleKeyUnPress = (event: any) => {
      keyPressed = ''
      update(dbRef, { state: 's' })
    }

    window.addEventListener('keyup', handleKeyUnPress)
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.addEventListener('keyup', handleKeyUnPress)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const directional = (arrow: string) => {
    switch (arrow) {
      case 'ArrowUp':
        update(dbRef, { state: 't' })
        break
      case 'ArrowDown':
        update(dbRef, { state: 'b' })

        break
      case 'ArrowLeft':
        update(dbRef, { state: 'l' })

        break
      case 'ArrowRight':
        update(dbRef, { state: 'r' })
        break
      default:
        console.log(`Sorry, we are out of ${arrow}.`)
    }
  }

  return (
    <Template>
      <div className='text-center'>
        <UpOutlined className='icons-outlined' />
        <div>
          <LeftOutlined className='icons-outlined' />
          <CarOutlined className='icons-outlined' />
          <RightOutlined className='icons-outlined' />
        </div>
        <DownOutlined className='icons-outlined' />
      </div>
    </Template>
  )
}

const Template = styled.div`
  .icons-outlined {
    font-size: 40px;
    font-weight: 900;
  }
  background-color: #ccc;
`
