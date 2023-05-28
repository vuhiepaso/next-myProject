import Link from 'next/link'

export default function Menu() {
  return (
    <div>
      {/* <img src='/next.svg' alt='' /> */}
      <ul className='flex justify-center '>
        <li className='mx-5'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='mx-5'>
          <Link href={'/dashboard'}>Dashboard</Link>
        </li>
        <li className='mx-5'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='mx-5'>
          <Link href={'/'}>Home</Link>
        </li>
      </ul>
    </div>
  )
}
