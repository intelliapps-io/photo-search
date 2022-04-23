import './PhotoGrid.css'
import { useEffect, useState } from 'react'
import { getImageUrls, ImageArrayItem } from '../../helpers/imageUrls'
import { PhotoBox } from '../PhotoBox/PhotoBox'

interface IPhotoGridProps {
  selectedTagsState: [selectedTags: string[], setSelectedTags: (arg: string[]) => void]
  selectedTagState: [selectedTag: string, setSelectedTag: (arg: string) => void]
}

export function PhotoGrid(props: IPhotoGridProps) {
  const [images, setImages] = useState<ImageArrayItem[]>([])
  const [selectedTags, setSelectedTags] = props.selectedTagsState
  const [selectedTag, setSelectedTag] = props.selectedTagState

  // load images once
  useEffect(() => setImages(getImageUrls()), [])

  console.log(selectedTag)

  return (
    <div className='photo-grid'>
      {images.map(image => {

        return (
          <PhotoBox
            key={image.url}
            imageUrl={image.url}
            // enabled={selectedTags.findIndex(name => name === image.type) > -1}
            enabled={selectedTag === image.type}
          />

        )
      }
      )}
    </div>
  )
}