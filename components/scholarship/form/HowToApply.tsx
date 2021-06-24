import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { MdCancel } from 'react-icons/md'
import { RiAddLine } from 'react-icons/ri'
import DisplayInputError from '../../forms/DisplayInputError'
import {
  InputTitle,
  TagInputWrapper,
  InputField,
  AddTagButton,
  TagItemWrapper,
  SquareTagItem,
  RemoveTagButton,
} from '../../forms/form-styles'

export default function HowToApply({ howToApply, setHowToApply }) {
  const [tagItemToAdd, setTagItemToAdd] = useState('')
  const [tagError, setTagError] = useState('')
  const removeTag = (index): void => {
    const newTags = howToApply.filter((_item: string, i: number) => i !== index)
    setHowToApply(newTags)
  }
  const addTag = (e): void => {
    e.preventDefault()
    if (!tagItemToAdd) {
      setTagError('Cannot add empty tag')
      return null
    }
    setHowToApply((prev) => [...prev, tagItemToAdd])
    setTagItemToAdd('')
  }
  const handleAddTag = (e) => {
    e.preventDefault()
    setTagError('')
    setTagItemToAdd(e.target.value)
  }
  return (
    <div>
      <InputTitle>How to apply</InputTitle>
      <TagInputWrapper>
        <InputField
          error={tagError}
          placeholder="How to apply"
          value={tagItemToAdd}
          onChange={handleAddTag}
          onFocus={() => setTagError('')}
        />
        <AddTagButton onClick={addTag}>
          <RiAddLine />
        </AddTagButton>
      </TagInputWrapper>
      {tagError && <DisplayInputError error={tagError} />}
      <TagItemWrapper>
        {howToApply.length
          ? howToApply.map((item, itemIndex) => (
              <SquareTagItem key={nanoid()}>
                {item}
                <RemoveTagButton onClick={() => removeTag(itemIndex)}>
                  <MdCancel />
                </RemoveTagButton>
              </SquareTagItem>
            ))
          : null}
      </TagItemWrapper>
    </div>
  )
}
