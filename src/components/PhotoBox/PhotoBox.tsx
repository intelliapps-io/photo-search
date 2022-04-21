import './PhotoBox.css'
import React from 'react'
import { randBetween } from '../../helpers/imageUrls'

interface IPhotoBoxProps {
 imageUrl: string
} 

export function PhotoBox(props: IPhotoBoxProps) {
  return (
    <div
      className='photo-box'
      style={{
        flexGrow: `${randBetween(1, 4)}`,
        flex: `1 0 ${randBetween(20, 40)}%`,
        backgroundImage: `url(${props.imageUrl})`
      }}
    >

    </div>
  )
}