import React, { useCallback, useState } from 'react'
import { Button } from './Button'
import UserSearch from './UserSearch'
const guestsArray = [
  { name: 'Sara', age: 22 },
  { name: 'Mile', age: 32 },
  { name: 'Tomas', age: 42 },
]
interface Guests {
  name: string
  age: number
}
const GuestList: React.FC = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [guests, setGuests] = useState<Guests[]>([...guestsArray])
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()
  const handleClick = useCallback(() => {
    if (name === '') return

    setGuests((prev) => [...prev, { name, age: +age }])
    setName('')
    setAge('')
  }, [name, age])

  const handleSearch = (term: string): void => {
    const guest = guests.find(
      (g) => g.name.toLowerCase() === term.toLowerCase()
    )
    setUser(guest)
  }
  console.log(`${name} - ${age} rendered GL`)

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>{guest.name}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <Button onClick={handleClick}>Add Guest </Button>
      <hr />
      <UserSearch handleSearch={handleSearch} />
      <hr />
      <p>Name: {user?.name}</p>
      <p>Age: {user?.age}</p>
    </div>
  )
}

export default GuestList
