import styled from "styled-components";

const AppStyle = styled.div`
.App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo infinite 20s linear;
    }
  }
  
  .App-header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  
  .Login {
    text-align: center;
    justify-content:center;  
  }
  
  .Login-logo{
    justify-content: center;
    text-align: center;
      
  }
  
  .Login-area{
    display: inline-block;
    border: 3px solid #3e74b4;
    border-radius: 50px;
    padding: 10px;
    font-size: large;
    background-color: rgba(0, 0, 0, 0.1);
    width: 25em;
  }

  .footer{
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #3e74b4;
    color: white;
    margin-top: 4em;
    text-align: center;
    position: static;
    left: 0;
    bottom: 0;
    }

  input{
    display: block;
    width: 20em;
    border: 2px solid black;
    border-radius: 7px;
    padding: 5px;
    margin: 0 auto;
  }

  .Suporte {
    text-align: center;
    justify-content:center;  
  }
  
  .Suporte-logo{
    justify-content: center;
    text-align: center;
      
  }

  .sugestao{
    height: 3em;
  }

  .Login-link{
    display: block;
  }

  .Sobre-area{
    display: inline-block;
    border: 3px solid #3e74b4;
    border-radius: 50px;
    padding: 10px;
    font-size: large;
    background-color: rgba(0, 0, 0, 0.1);
    width: 40em;
  }

  .paragrafo{
    margin: 20px;
    text-align:justify;
  }

  .equipe{
    display: block;
    margin: 0 auto;
    line-height: 5px;
  }

  .nomes{
    text-decoration: none;
    color: black;
    display: block;
    font-size: larger;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  .div-membro{
    padding-top: 30px;
  }


.imagem-sobre{
  border: 3px solid #3e74b4;
  border-radius: 1.5em;
}

.linkedin{
  text-decoration: none;
  color: blue;
}


.button1{
  display: inline-block;
  padding: 0.5em 1em;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 4px;
  border: 1px solid #3e74b4;
  background-color: #f5f5f5;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 10px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
}

.button2{
  color: black;
}

.titulos{
  text-align: center;
}
`

export { AppStyle };