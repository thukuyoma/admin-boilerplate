import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { useQuery } from 'react-query'
import Select from 'react-select'
import getWriteCategories from '../../../actions/post/get-write-categories'
import capitalizeFirstLetter from '../../../utils/capitalize-first-letter'
import {
  Control,
  customReactSelectStyles,
  ErrorIcon,
  InputError,
  InputTitle,
} from '../../shared/form-styles'

export default function Category({ inputErrors, setInputErrors, setCategory }) {
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
        />
      </div>
      {inputErrors.category && (
        <InputError>
          <ErrorIcon>
            <BiErrorCircle />
          </ErrorIcon>
          {inputErrors.category}
        </InputError>
      )}
    </Control>
  )
}
