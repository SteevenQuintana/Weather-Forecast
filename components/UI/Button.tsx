import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  type?: ButtonType
  className?: string
  onClick?: () => void
}

type ButtonType = 'button' | 'submit' | 'reset'

const Button = ({
  children,
  type = 'button',
  className,
  onClick
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-[#ffffff] dark:bg-[#1c2f3d] text-[#1d1d1d] dark:text-[#dbdbdb] rounded-md py-2 px-7 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
