import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextInput } from './interfaces/ITextInput';

const TextInput: FC<ITextInput> = (props): ReactElement => {
  const {
    name = '',
    label = '',
    value = '',
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <TextField
      id={`${name}-id`}
      label={label}
      placeholder={label}
      variant="outlined"
      size="small"
      name={name}
      fullWidth
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default TextInput;
