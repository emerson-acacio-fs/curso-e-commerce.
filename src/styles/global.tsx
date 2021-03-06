import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme,
} from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean;
};

export const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`


  /* poppins-200 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-display:swap;
    src: local(''),
        url('./fonts/poppins-v15-latin-200.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/poppins-v15-latin-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* poppins-300 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display:swap;
    src: local(''),
        url('./fonts/poppins-v15-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/poppins-v15-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display:swap;
    src: local(''),
        url('./fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/poppins-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* poppins-500 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display:swap;
    src: local(''),
        url('./fonts/poppins-v15-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/poppins-v15-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display:swap;
    src: local(''),
        url('./fonts/poppins-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/poppins-v15-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* poppins-800 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-display:swap;
    src: local(''),
        url('./fonts/poppins-v15-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/poppins-v15-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }



  ${({theme, removeBg}) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}

`;
