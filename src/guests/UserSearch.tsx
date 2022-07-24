import React, { useState } from 'react'
import { Button } from './Button'
type SearchProps = {
  handleSearch: (term: string) => void
}
const UserSearch = ({ handleSearch }: SearchProps) => {
  const [term, setTerm] = useState('')
  console.log(term)
  return (
    <div>
      <input
        type='search'
        placeholder='search'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Button onClick={() => handleSearch(term)}>Search</Button>
    </div>
  )
}

export default UserSearch
