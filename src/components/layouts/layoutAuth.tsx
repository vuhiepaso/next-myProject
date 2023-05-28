'use client'
import { Layout } from 'antd'
import { Footer } from '../common/footer'
import { HeaderAuth } from '../common/header'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Layout>
        <HeaderAuth />
        <Layout.Content>
          <div>{children}</div>
        </Layout.Content>
        <Footer />
      </Layout>
    </>
  )
}
