import React, { useState } from 'react'
import {
  InputTitle,
  InputField,
  ErrorIcon,
  InputError,
  AddTagButton,
  RemoveTagButton,
  TagInputWrapper,
  TagItem,
  TagItemWrapper,
} from '../../shared/form-styles'
import { nanoid } from 'nanoid'
import { MdCancel } from 'react-icons/md'
import { RiAddLine, RiErrorWarningLine } from 'react-icons/ri'

export default function Tags({ tags, setTags }) {
  const [tagItemToAdd, setTagItemToAdd] = useState('')
  const [tagError, setTagError] = useState('')
  const removeTag = (index): void => {
    const newTags = tags.filter((_item: string, i: number) => i !== index)
    setTags(newTags)
  }
  const addTag = (e): void => {
    if (!tagItemToAdd) {
      setTagError('Cannot add empty tag')
      return null
    }
    setTags((prev) => [...prev, tagItemToAdd])
    setTagItemToAdd('')
  }

  const handleAddTag = (e) => {
    setTagError('')
    setTagItemToAdd(e.target.value)
  }
  return (
    <div>
      <InputTitle>Tags</InputTitle>
      <TagInputWrapper>
        <InputField
          error={tagError}
          placeholder="Tags"
          value={tagItemToAdd}
          onChange={handleAddTag}
          onFocus={() => setTagError('')}
        />
        <AddTagButton onClick={addTag}>
          <RiAddLine />
        </AddTagButton>
      </TagInputWrapper>
      {tagError && (
        <InputError>
          <ErrorIcon>
            <RiErrorWarningLine />
          </ErrorIcon>
          {tagError}
        </InputError>
      )}
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
