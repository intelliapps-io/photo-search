import './PhotoGrid.css'
import { useEffect, useState } from 'react'
import { getImageUrls, ImageArrayItem } from '../../helpers/imageUrls'
import { PhotoBox } from '../PhotoBox/PhotoBox'

interface IPhotoGridProps {

}

export function PhotoGrid(props: IPhotoGridProps) {
  const [images, setImages] = useState<ImageArrayItem[]>([])

  // load images once
  useEffect(() => setImages(getImageUrls()), [])


  return (
    <div className='photo-grid'>
      {images.map(image => 
        <PhotoBox
          key={image.url}
          imageUrl={image.url}
        />  
      )}
    </div>
  )
}