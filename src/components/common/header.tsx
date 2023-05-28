'use client'
import { Layout } from 'antd'
import Image from 'next/image'
import './headerAndFooter.css'
import { LoginOutlined, UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
const HeaderAuth = () => {
  return (
    <>
      <Layout.Header className='box__header'>
        <div>Auth</div>
      </Layout.Header>
    </>
  )
}

const HeaderDashboard = () => {
  return (
    <>
      <Layout.Header className='box__header'>
        <div className='h-full flex justify-between items-center'>
          <Link href={'/'}>
            <Image
              width={100}
              height={500}
              priority
              src='/next.svg'
              alt='Next.js Logo'
            />
          </Link>
          <div className='text-2xl flex  items-center'>
            <UserOutlined color='#fff' />
            <div className='mx-3'></div>
            <LoginOutlined color='#fff' />
          </div>
        </div>
      </Layout.Header>
    </>
  )
}
export { HeaderAuth, HeaderDashboard }
