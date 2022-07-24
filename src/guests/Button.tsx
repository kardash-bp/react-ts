import React, { FC, ComponentProps } from 'react'

//interface ButtonProps extends React.ComponentProps<'button'> {
//name: string
// handleClick: () => void
//}

export const Button: FC<ComponentProps<'button'>> = ({
  children,
  ...buttonProps
}) => {
  console.log(`Button rendered`)
  return <button {...buttonProps}>{children}</button>
}
