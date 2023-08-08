'use client'
import { Layout } from 'antd'
import styled from 'styled-components'

function Header() {
  return (
    <Template>
      <div className='header flex items-center'>
        <div className='logo container px-2'>
          <span className='first'>N</span> H H
        </div>
      </div>
    </Template>
  )
}
// STYLE
const Template = styled.div`
  .header {
    height: 80px;
    background-color: #000000bf;
  }
  .logo {
    font-size: 35px;
    font-weight: 700;
    color: white;
  }
  .first {
    font-size: 50px;
    color: red;
    background: white;
  }
`
export default Header
