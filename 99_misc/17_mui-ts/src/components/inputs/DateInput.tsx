import { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { IDateInput } from './interfaces/IDateInput';

const DateInput: FC<IDateInput> = (props): ReactElement => {
  const {
    label = '',
    value = '',
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label={label}
          inputFormat="yyyy/MM/dd"
          value={value}
          disabled={disabled}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                '.MuiInputBase-input': {
                  padding: '8.5px 14px',
                },
                '.MuiInputLabel-formControl': {
                  top: '-8.5px',
                },
                '.MuiInputLabel-shrink': {
                  top: '0',
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

export default DateInput;
