import ImageShow from './ImageShow'
import './imageList.css'

function ImageList({ images }) {
  const renderedImages = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ))

  return (
    <>
      <h3 className='image-total'>Total Image: {images.length}</h3>
      <div className='image-list'>{renderedImages}</div>
    </>
  )
}

export default ImageList
