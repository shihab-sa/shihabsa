import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family:'Poppins', sans-serif;
    transition: all .5s linear;
  }


 
  p {
    ${'' /* line-height:1rem; */}
    color: darkblue;
  }
  .btn-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;
  }
`;

export const lightTheme = {
  body:"#faeee7",
  text: '#121212',
  primary: '#6200ee',
};

export const darkTheme = {
  // body: '#121212',
  body:"#323a45",
  text: '#fff',
  primary: '#bb86fc',
  
};