import { IDisabled } from './IDisabled';

export interface IDateInput extends IDisabled {
  label?: string;

  value?: Date | null;

  onChange?: (date: Date | null) => void;
}
