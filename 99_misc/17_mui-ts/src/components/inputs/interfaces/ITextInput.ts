import { ChangeEvent } from 'react';
import { IDisabled } from './IDisabled';

export interface ITextInput extends IDisabled {
  name?: string;

  label?: string;

  value?: string;

  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
