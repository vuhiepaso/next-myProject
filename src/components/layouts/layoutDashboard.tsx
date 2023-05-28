'use client'
import { Layout } from 'antd'
import { Footer } from '../common/footer'
import { HeaderDashboard } from '../common/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Layout>
        <HeaderDashboard />
        <Layout.Content>
          <div>{children}</div>
        </Layout.Content>
        <Footer />
      </Layout>
    </>
  )
}
