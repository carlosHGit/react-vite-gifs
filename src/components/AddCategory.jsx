import React, { useState } from 'react'

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    if(inputValue.trim().length <= 1) return;
    onAddCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type='text'
        placeholder='add a new category'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
