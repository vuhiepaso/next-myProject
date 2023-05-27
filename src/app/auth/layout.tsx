export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>login or register</header>
      <nav>this is slot nav</nav>
      {children}
      <footer>contact info</footer>
    </>
  )
}
