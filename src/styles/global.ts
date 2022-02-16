import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
  box-sizing: border-box;
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
    transition: box-shadow .5s ease;
}
`;
