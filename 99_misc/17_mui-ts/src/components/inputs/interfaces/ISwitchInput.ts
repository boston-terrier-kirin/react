import { ChangeEvent } from 'react';
import { IDisabled } from './IDisabled';

export interface ISwitchInput extends IDisabled {
  name?: string;

  label?: string;

  value?: boolean;

  color?:
    | 'warning'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'default'
    | undefined;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
