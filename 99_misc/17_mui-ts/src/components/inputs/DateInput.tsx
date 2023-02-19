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
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default DateInput;
