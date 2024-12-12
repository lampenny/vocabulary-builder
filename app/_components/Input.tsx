import React, { ChangeEvent, MouseEvent, FC } from "react"

interface InputProps {
  value?: string
  type?: string
  placeholder: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  label?: string
}

export const Input: FC<InputProps> = ({
  value,
  type,
  placeholder,
  onChange,
  required,
  label,
}) => {
  return (
    <div className="flex flex-col w-full mb-5">
      {label ? label : ""}
      <input
        aria-label={label}
        type={type ? type : "text"}
        className="rounded-xl h-20 p-5 text-3xl outline-none border-2 border-orange-300 placeholder-slate-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}
