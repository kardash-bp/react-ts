import React from 'react'

interface ChildProps {
  color: string
  onClick: () => void
}

// const Child = ({ color }: ChildProps) => {
//   return <div>{color}</div>
// }

const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default Child
