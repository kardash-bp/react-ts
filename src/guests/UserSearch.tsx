import React, { useState, InputHTMLAttributes, FC } from 'react'
import { Button } from './Button'
import { InputElement } from './InputElement'
interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  handleSearch: (term: string) => void
}
const UserSearch: FC<SearchProps> = ({ handleSearch }) => {
  const [term, setTerm] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(e.target.value)
  }

  console.log(term)
  return (
    <div>
      <InputElement
        id='search'
        label='Search Names'
        type='search'
        placeholder='search'
        value={term}
        onChange={handleChange}
      />
      <Button onClick={() => handleSearch(term)}>Search</Button>
    </div>
  )
}

export default UserSearch
