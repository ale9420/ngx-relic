export type Color =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'slate'
  | 'neutral';

export type ButtonColor = 'primary' | 'danger' | 'success';

export type OnChangeSelectFn<T> = (options: T[]) => void;
export type OnChange = (value: any) => void;
export type OnTouched = () => void;

export type TagSize = 'small' | 'medium' | 'large';

export interface SelectOption extends Object {
  selected?: boolean;
}

export interface Day {
  day: number;
  name: string;
}

type CellAlign = 'left' | 'center' | 'right';

export type HeaderStyles = {
  title: string;
  width?: string | number;
  align?: CellAlign;
};

export type TableOptions = {
  columns: {
    [key: string]: HeaderStyles;
  };
  body?: {
    [key: string]: {
      align?: CellAlign;
    };
  };
};
