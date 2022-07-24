import React from 'react'

interface ButtonProps extends React.ComponentProps<'button'> {
  //name: string
  // handleClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  console.log(`Button rendered`)
  return <button {...buttonProps}>{children}</button>
}
