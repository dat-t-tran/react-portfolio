type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  className: string;
  id: string;
  type: ButtonType;
  onClick: () => void;
  children?: React.ReactNode;
  image?: string;
  disabled?: boolean;
}
