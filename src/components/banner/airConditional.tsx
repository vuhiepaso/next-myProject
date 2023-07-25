import styled from 'styled-components'
import Image from 'next/image'
function AirConditional() {
  return (
    <Template>
      <div className='content-box p-5 text-left'>
        <h2 className='text-3xl'>Name </h2>
        <div>This is ...</div>
        <div>Description this is ...</div>
        {/* <div>Description this is ...</div> */}
      </div>
      {/* <Image
        className='img-banner'
        src='https://cdn.builder.io/api/v1/image/assets%2F303981477d1e41d08587796c8f3bf623%2F7954d6f5690f477c868584bdd4b57fa1?format=webp&width=2000'
        width={800}
        height={800}
        priority={true}
        alt='Picture of the author'
      /> */}

      {/* eslint-disable @next/next/no-img-element */}
      <img
        className='img-banner'
        src='https://cdn.builder.io/api/v1/image/assets%2F303981477d1e41d08587796c8f3bf623%2F7954d6f5690f477c868584bdd4b57fa1?format=webp&width=2000'
        alt=''
      />
    </Template>
  )
}
// STYLE
const Template = styled.div`
  height: 100%;
  position: relative;
  .img-banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content-box {
    position: absolute;
    bottom: 0;
    z-index: 5;
    width: 100%;
    background-color: #3d3d3da2;
  }
`
export default AirConditional
