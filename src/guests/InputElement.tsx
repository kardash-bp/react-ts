import { InputHTMLAttributes, FC } from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
}
export const InputElement: FC<InputProps> = ({ id, label, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest}></input>
    </>
  )
}
