import logo from './minha_foto.jpg';
import Menu from '../components/Menu/Menu';
import { Link } from "react-router-dom";
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
              <h1>Login - Credenciais</h1>
              <p>E-mail corporativo</p> 
              <input className='input' type='email'></input>        
              <p>Senha de usuário</p> 
              <input className='input' type='password'></input> 
              <a className='button1' href="/Chamados">Entrar</a>
              <br></br>
              <br></br>
              <a className='button2' href="/Senha">Esqueci minha senha</a>
              </body>         
            <footer className='footer'>
              <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
            </footer>
          </div>
    </AppStyle> 
  );
}

export default Login;