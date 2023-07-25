'use client'
import { Layout } from 'antd'

import Header from '../../components/common/header'
import Footer from '../../components/common/footer'
const { Content } = Layout
type Props = {
  children: React.ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <Layout>
      <Header />
      <Layout hasSider>
        <Content className='container'>
          <div>{children}</div>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  )
}
