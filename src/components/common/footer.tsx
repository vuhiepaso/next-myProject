'use client'
import { Layout } from 'antd'
import styled from 'styled-components'

function Footer() {
  return (
    <Template>
      <Layout.Footer>
        <div className='logo'>N-H-H</div>
      </Layout.Footer>
    </Template>
  )
}
// STYLE
const Template = styled.div`
  .ant-layout-footer {
    background-color: #001529;
    min-height: 200px;
  }
  .logo {
    font-weight: 700;
    color: white;
  }
`
export default Footer
