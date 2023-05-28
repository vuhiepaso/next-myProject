import AuthLayout from '@/components/layouts/layoutAuth'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthLayout>{children}</AuthLayout>
    </>
  )
}
