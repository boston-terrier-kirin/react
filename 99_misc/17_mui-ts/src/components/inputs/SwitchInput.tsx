import { FormControlLabel, Switch } from '@mui/material';
import { FC, ReactElement } from 'react';
import { ISwitchInput } from './interfaces/ISwitchInput';

const SwitchInput: FC<ISwitchInput> = (props): ReactElement => {
  const {
    name = '',
    label = '',
    value = true,
    color = undefined,
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <FormControlLabel
      label={label}
      control={
        <Switch
          id={`${name}-id`}
          name={name}
          color={color}
          checked={value}
          onChange={onChange}
          disabled={disabled}
        />
      }
    ></FormControlLabel>
  );
};

export default SwitchInput;
