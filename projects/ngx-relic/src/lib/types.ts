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

export type OnTouched = () => void;

export interface SelectOption extends Object {
  selected?: boolean;
}
