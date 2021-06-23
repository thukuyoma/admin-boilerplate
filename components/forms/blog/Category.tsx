import React from 'react'
import { useQuery } from 'react-query'
import Select from 'react-select'
import getWriteCategories from '../../../actions/post/get-write-categories'
import capitalizeFirstLetter from '../../../utils/capitalize-first-letter'
import DisplayInputError from '../DisplayInputError'
import { Control, customReactSelectStyles, InputTitle } from '../form-styles'

export default function Category({ category, inputErrors, setInputErrors, setCategory }) {
  const { data: catItems, isSuccess } = useQuery('catItems', getWriteCategories)

  const options =
    isSuccess && catItems.map((x) => ({ value: x.title, label: capitalizeFirstLetter(x.title) }))

  const handleChange = (selectedOption) => {
    setInputErrors((prev) => ({ ...prev, category: '' }))
    setCategory(selectedOption.value)
  }

  return (
    <Control>
      <InputTitle>Category</InputTitle>
      <div>
        <Select
          styles={customReactSelectStyles('inputErrors.category')}
          options={options.length && options}
          onChange={handleChange}
          placeholder={category ? category : 'Select Category'}
        />
      </div>
      {inputErrors.category && <DisplayInputError error={inputErrors.category} />}
    </Control>
  )
}
