import React, { useState } from 'react'
import {
  AddTagButton,
  RemoveTagButton,
  TagInputWrapper,
  TagItem,
  TagItemWrapper,
} from '../form-styles'
import { nanoid } from 'nanoid'
import { MdCancel } from 'react-icons/md'
import { RiAddLine } from 'react-icons/ri'
import DisplayInputError from '../DisplayInputError'
import InputField from '../InputField'

export default function Tags({ tags, setTags }) {
  const [tagItemToAdd, setTagItemToAdd] = useState('')
  const [tagError, setTagError] = useState('')
  const removeTag = (index): void => {
    const newTags = tags.filter((_item: string, i: number) => i !== index)
    setTags(newTags)
  }

  const addTag = (e): void => {
    e.preventDefault()
    if (!tagItemToAdd) {
      setTagError('Cannot add empty tag')
      return null
    }
    setTags((prev) => [...prev, tagItemToAdd])
    setTagItemToAdd('')
  }

  const handleAddTag = (e) => {
    e.preventDefault()
    setTagError('')
    setTagItemToAdd(e.target.value)
  }
  return (
    <div>
      <TagInputWrapper>
        <InputField
          title="Tags"
          label="tags"
          name="tags"
          error={tagError}
          placeholder="Tags"
          value={tagItemToAdd}
          onChange={handleAddTag}
        />
        <AddTagButton onClick={addTag}>
          <RiAddLine />
        </AddTagButton>
      </TagInputWrapper>
      {tagError && <DisplayInputError error={tagError} />}
      <TagItemWrapper>
        {tags.map((item, itemIndex) => (
          <TagItem key={nanoid()}>
            {item}
            <RemoveTagButton onClick={() => removeTag(itemIndex)}>
              <MdCancel />
            </RemoveTagButton>
          </TagItem>
        ))}
      </TagItemWrapper>
    </div>
  )
}
