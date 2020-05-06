import { Option } from './Option';

export interface Filter {
  displayName: string;
  options: Option[];
  category: string;
}
