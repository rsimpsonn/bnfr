import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    color: #fff;
  }

  p,
  label {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5em;
  }
`;
