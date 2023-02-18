import { ChangeEvent } from 'react';
import { IDisabled } from './IDisabled';

export interface ITextField extends IDisabled {
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
