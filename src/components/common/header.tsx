'use client'
import { Layout } from 'antd'
import './headerAndFooter.css'
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
        <div>Dashboard</div>
      </Layout.Header>
    </>
  )
}
export { HeaderAuth, HeaderDashboard }
