import React from "react";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Tudo } from "../components/Cartao/style";
import logo from './minha_foto.jpg';
import { AppStyle } from "./style";


function Suporte() {
  return (
  <AppStyle>
    <div className="Suporte">
      <Menu />
      <header className="Suporte-logo">
        <img src={logo} className="Suporte-logo" alt="logo" />
      </header>
      <body className='Login-area'>
        <h1>Suporte TechMais</h1>
        <h2>Email</h2>  
        <p>suporte@techmais.com</p>     
        <h2>Telefone</h2>
        <p>(21)9999-8888 /  (11) 98769-5555</p> 
        <h2>Horário de funcionamento</h2>  
        <p>24h/dia - 7 dias por semana</p>
        <h2>Enviar uma solicitação</h2>  
        <p>E-mail</p> 
        <input className="email" type='email'></input>
        <p>Sugestão / Problema</p> 
        <input className="sugestao" type='text'></input>  
        <br />     
        <a href="" className="button1">Enviar</a>
        <a href="" className="button1">Descartar</a>     
      </body>
      <footer className='footer'>
        <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
      </footer>
    </div>
  </AppStyle>
);
}

export default Suporte;