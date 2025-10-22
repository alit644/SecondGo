
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface MSelectProps {
  name: string;
}

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface MSelectProps extends React.ComponentProps<typeof Select> {
  name: string
  options: SelectOption[]
  placeholder?: string
  label?: string
  className?: string
  disabled?: boolean
  required?: boolean
}

export const MSelect = ({
  name,
  options,
  placeholder = 'Select an option',
  label,
  className = '',
  disabled = false,
  required = false,
  ...props
}: MSelectProps) => {
  return (
    <Select name={name} disabled={disabled} required={required} {...props}>
      <SelectTrigger className={`w-full ${className} `}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map((option) => (
            <SelectItem 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
