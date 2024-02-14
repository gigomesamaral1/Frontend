import logo from './minha_foto.jpg';
import Menu from '../components/Menu/Menu';
import { AppStyle } from "./style";


function Login() {
    return (
      <AppStyle>
        <div className="Login">
          <Menu />
          <header className="Login-logo">
            <img src={logo} className="Login-logo" alt="logo" />
          </header>
          <body className='Login-area'>
            <h1>Redefinir senha</h1>
            <p>E-mail corporativo</p> 
            <input className='input' type='email'></input>        
            <p>Nova senha</p> 
            <input className='input' type='password'></input> 
            <p>Confirmar nova senha</p> 
            <input className='input' type='password'></input> 

            <a href='/' className='button1'>Enviar</a>
            <a href='' className='button1'>Descartar</a>
                    
          </body>
          <footer className='footer'>
            <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
          </footer>
        </div>
      </AppStyle>
  );
}

export default Login;