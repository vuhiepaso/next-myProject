import DashboardLayout from '@/components/layouts/layoutDashboard'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  )
}
