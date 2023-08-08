import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
function AirConditional() {
  return (
    <Template>
      <div className='content-box p-5 text-center'>
        <h2 className='text-3xl'>Name </h2>
        <div>This is ...</div>
        <div>Description this is ...</div>
        <Link href='/login'>
          <button className='btn-banner mt-4'>Login</button>
        </Link>
      </div>
      {/* <Image
        className='img-banner'
        src='https://next-blog-wordpress.vercel.app/_next/image?url=https%3A%2F%2Fvercelsolutions.com%2Fwp-content%2Fuploads%2F2022%2F06%2Fclaudio-schwarz-ZuT6efbmt8U-unsplash-scaled.jpg&w=2048&q=75'
        width={500}
        height={200}
        priority={true}
        alt='Picture of the author'
      /> */}
      {/* eslint-disable @next/next/no-img-element */}
      <img
        className='img-banner'
        src='https://next-blog-wordpress.vercel.app/_next/image?url=https%3A%2F%2Fvercelsolutions.com%2Fwp-content%2Fuploads%2F2022%2F06%2Fclaudio-schwarz-ZuT6efbmt8U-unsplash-scaled.jpg&w=2048&q=75'
        alt=''
      />
    </Template>
  )
}
// STYLE
const Template = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .img-banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content-box {
    position: absolute;
    z-index: 5;
    width: 50%;
    background-color: #3d3d3da2;
    flex-grow: 1;
    border-radius: 8px;
  }
  .btn-banner {
    height: 60px;
    width: 250px;
    background-color: white;
    border-radius: 8px;
    color: #000;
  }
`
export default AirConditional
