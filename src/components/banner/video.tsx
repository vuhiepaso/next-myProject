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
      {/* <iframe
        width='100%'
        height='100%'
        src='https://www.youtube.com/embed/9HaU8NjH7bI'
        title='Background technology world loop'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe> */}
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
    background-color: #3d3d3d;
  }
`
export default AirConditional
