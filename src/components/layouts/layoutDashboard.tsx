'use client'
import { Layout } from 'antd'
import { Footer } from '../common/footer'
import { HeaderDashboard } from '../common/header'
import Menu from '../common/menu'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Layout>
        <HeaderDashboard />
        <nav>
          <Menu />
        </nav>
        <Layout.Content>
          <div>{children}</div>
        </Layout.Content>
        <Footer />
      </Layout>
    </>
  )
}
