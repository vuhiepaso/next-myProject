'use client'
import { Layout } from 'antd'
import styled from 'styled-components'

function Header() {
  return (
    <Template>
      <Layout.Header>
        <div className='logo container'>N-H-H</div>
      </Layout.Header>
    </Template>
  )
}
// STYLE
const Template = styled.div`
  .logo {
    font-size: 1.5em;
    font-weight: 700;
    color: white;
  }
`
export default Header
