import { Container, Descricao, Momento, Simbolo } from "./style";

const Cartao = ( props ) => (
    <Container>
        <Simbolo>{ props.simb }</Simbolo>
        <Descricao> 
            Funcionário  |  Descrição  | Criticidade  |  Contato 
        </Descricao>
        <Momento>{ props.data }</Momento>
    </Container>
);

export default Cartao;