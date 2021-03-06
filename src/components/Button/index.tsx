import {ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.WrapperButton
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.WrapperButton>
);
