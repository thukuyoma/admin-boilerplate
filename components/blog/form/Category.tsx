import React from 'react'
import { useQuery } from 'react-query'
import getWriteCategories from '../../../actions/post/get-write-categories'
import InputSelect from '../../forms/InputSelect'

export default function Category({ category, error, handleChange }) {
  const { data: catItems, isSuccess } = useQuery('catItems', getWriteCategories)
  const options = isSuccess && catItems.map((x) => x.title)

  return (
    <InputSelect
      title="Blog Category"
      label="blogCategory"
      name="blogCategory"
      value={category}
      onChange={(e) => handleChange(e)}
      error={error}
      options={options}
      placeholder={category ? category : 'Select Category'}
      isRequired
    />
  )
}
