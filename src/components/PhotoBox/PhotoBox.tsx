import './PhotoBox.css'
import React from 'react'
import { ImageType, randBetween } from '../../helpers/imageUrls'

interface IPhotoBoxProps {
  imageUrl: string
  enabled: boolean
} 

export function PhotoBox(props: IPhotoBoxProps) {
  const { enabled } = props

  return (
    <div
      className='photo-box'
      style={{
        flexGrow: `${randBetween(1, 4)}`,
        flex: `1 0 ${randBetween(20, 40)}%`,
        backgroundImage: `url(${props.imageUrl})`,
        display: enabled ? undefined : 'none'
        // width: enabled ? undefined : '0px !important'
      }}
    >

    </div>
  )
}