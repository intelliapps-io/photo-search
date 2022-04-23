import { Segmented } from "antd"
import CheckableTag from "antd/lib/tag/CheckableTag"
import { useState } from "react"

export interface IPhotoSortMenuProps {
  selectedTagsState: [selectedTags: string[], setSelectedTags: (arg: string[]) => void]
  selectedTagState: [selectedTags: string, setSelectedTags: (arg: string) => void]
}

export function PhotoSortMenu(props: IPhotoSortMenuProps) {
  const [selectedTags, setSelectedTags] = props.selectedTagsState
  const [selectedTag, setSelectedTag] = props.selectedTagState

  const Tags = ['dog', 'fish', 'land', 'snow', 'water'].map(tag => {
    return (
      <>
        {/* @ts-ignore */}
        <CheckableTag
          checked={selectedTags.findIndex(name => name === tag) > -1}
          onChange={(checked) => { 
            if (checked)
              setSelectedTags([...selectedTags, tag])
            else
              setSelectedTags(selectedTags.filter(name => name !== tag))
          }}
          className=''
          key={tag}
        >
          {tag}
        </CheckableTag>
      </>
    )
  })

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 30
    }}>
      {/* {Tags} */}
      <Segmented
        options={['dog', 'fish', 'land', 'snow', 'water']}
        onChange={(e) => setSelectedTag(e.target.value as string)}
        value={selectedTag}
        className='sort-menu'
        size="large"
      />
    </div>
  )
}