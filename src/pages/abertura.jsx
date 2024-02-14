import logo from './minha_foto.jpg';
import Menu from '../components/Menu/Menu';
import Dropdown from '../pages/dropdown'; 
import { AppStyle } from "./style";
import { Link } from "react-router-dom";

function Abertura() {
    return (
      <AppStyle>
        <div className="Login">
          <Menu />
          <header className="Login-logo">
            <img src={logo} className="Login-logo" alt="logo" />
          </header>
          <body className='Login-area'>
            <h1>Abertura de chamados</h1>
            <Dropdown />

            <p>Descrição do problema</p> 
            <input type='text'></input> 

            <p>Criticidade / SLA</p> 
            <input type='text'></input> 
            
            <p>Responsável pela abertura</p> 
            <input type='text'></input> 

            <p>Data de abertura</p> 
            <input type='date'></input> 
            <p></p>
            <a href='/Chamados' className='button1'>Enviar</a>
            <a href='' className='button1'>Descartar</a>
                    
          </body>
          <footer className='footer'>
            <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
          </footer>
        </div>
      </AppStyle>
  );
}

export default Abertura;


