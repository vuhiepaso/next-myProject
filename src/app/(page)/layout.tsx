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
    <>
      <Layout>
        <Header />
        <div
          className='text-center'
          style={{
            letterSpacing: '1em',
            fontSize: '18px',
            fontWeight: '500',
          }}
        >
          REPUTATION QUALITY
        </div>
        <Layout hasSider>
          <Content className='container'>
            <div>{children}</div>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </>
  )
}
