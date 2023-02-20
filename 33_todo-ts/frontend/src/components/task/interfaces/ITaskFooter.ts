import { ChangeEvent, MouseEvent } from 'react';

export interface ITaskFooter {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  onClick?: (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) => void;
}
