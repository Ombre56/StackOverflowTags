import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { ButtonComponent } from './ButtonComponent';

export default function InputNumber({ setNumberValue }) {
  const [valueError, setValueError] = useState(false)
  const [newValue, setNewValue] = useState({
    page: 0,
    pageSize: '',
  });

  const handleNumberChange = (event) => {
    setNewValue(parseFloat(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const changeValue = {
      page: 0,
      pageSize: newValue,
    }

    if (newValue.pageSize === '') {
      setValueError(true)
    } else {
      setNumberValue(changeValue)
      setNewValue({pageSize: ''})
    }
  };
  return (
    <>
      <Typography
        variant="h6" 
        color="white"
        component="h2"
        gutterBottom
      >
        Ile elementów wyświetlić?
      </Typography>
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
        <TextField
          label="Wprowadź liczbę"
          variant='filled'
          type='number'
          value={newValue.pageSize}
          onChange={handleNumberChange}
          error={valueError}
          sx={{
            "& .MuiInputBase-root": { backgroundColor: "#29648A", color: "#fff", marginBottom: '10px', marginRight: '10px' },
          }}
        />
        <ButtonComponent />
      </form>
    </>
  );
}