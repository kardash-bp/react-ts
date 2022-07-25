import React, {
  useState,
  InputHTMLAttributes,
  FC,
  ChangeEvent,
  MouseEvent,
} from 'react'
import { Button } from './Button'
import { InputElement } from './InputElement'
interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  handleSearch: (term: string) => void
}
const UserSearch: FC<SearchProps> = ({ handleSearch }) => {
  const [term, setTerm] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTerm(e.target.value)
  }
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.target)
    console.log(event.currentTarget)
    if (term === '') return
    handleSearch(term)
    setTerm('')
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
      <Button onClick={handleClick}>Search</Button>
    </div>
  )
}

export default UserSearch
