import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600&display=swap');
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    *:focus {
      outline: 0;
    }
    html, body {
      height: 100%;
    }
    body {
      color:black;
      -webkit-font-smoothing: antialiased;
    }
    body, input, button {
      font: 16px 'Archivo', sans-serif;
    }
    a {
      text-decoration: none;
    }
    ul {
      list-style: none;
    }
    button{
      cursor: pointer;
    }
    h1,h2,h3,h4,h5,h6,strong{
      font-weight:500px;
    }

    button{
      cursor:pointer;
    }
`;