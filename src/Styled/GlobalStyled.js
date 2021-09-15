import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle `
  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[class] {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  .slick-slide.slick-active{
    display: flex;
    justify-content: center;
  }
  .slick-next {
    right: 20px;
    z-index: 1;
  }
  .slick-prev {
    left: 20px;
    z-index: 1;
  }
`