import { InputHTMLAttributes, FC, useRef, useEffect } from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
}
export const InputElement: FC<InputProps> = ({ id, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    inputRef.current?.focus()
  })
  return (
    <>
      <label htmlFor={id}> {label} </label>
      <input ref={inputRef} id={id} {...rest}></input>
    </>
  )
}
