import { SelectChangeEvent } from '@mui/material/Select';
import { IDisabled } from './IDisabled';

export interface ISelectItem {
  value: string;
  label: string;
}

export interface ISelectField extends IDisabled {
  name?: string;

  label?: string;

  value?: string;

  onChange?: (event: SelectChangeEvent) => void;

  items?: ISelectItem[];
}
