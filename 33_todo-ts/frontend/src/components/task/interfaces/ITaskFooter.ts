import { ChangeEvent, MouseEvent } from 'react';

export interface ITaskFooter {
  id: string;

  status?: string;

  onStatusChange?: (event: ChangeEvent<HTMLInputElement>, id: string) => void;

  onMarkComplete?: (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>,
    id: string
  ) => void;
}
