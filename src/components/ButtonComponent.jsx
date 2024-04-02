import { Button } from "@mui/material"

export const ButtonComponent = (props) => {
  const {color = 'primary'} = props
  return (
    <Button
      type="submit"
      color={color}
      variant='contained'
    >
      WYŚLIJ
    </Button>
  )
}

