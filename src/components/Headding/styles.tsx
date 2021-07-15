import styled, {css, DefaultTheme} from 'styled-components';
import {HeadingProps} from '.';
import media from 'styled-media-query';

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `,
};

export const WrapperHeading = styled.h2<HeadingProps>`
  ${({theme, color, lineLeft, lineBottom}) => css`
    color: ${theme.colors[color!]};
    ${media.lessThan('medium')`
      font-size:${theme.font.sizes.xxlarge}
    `}
    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`;