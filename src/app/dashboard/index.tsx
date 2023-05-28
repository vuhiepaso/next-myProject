'use client'
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout
export default function Dashboard() {
  return (
    <main>
      <Layout>
        <Header>
          <div style={{ color: '#fff' }}>Header</div>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </main>
  )
}
