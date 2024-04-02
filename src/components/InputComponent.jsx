import { TextField } from "@mui/material"

export const InputComponent = (props) => {
  const {variant = 'filled', label = 'Wprowadź liczbę'} = props
  return (
    <TextField
      label={label}
      variant={variant}
      type='number'
    />
  );
}

