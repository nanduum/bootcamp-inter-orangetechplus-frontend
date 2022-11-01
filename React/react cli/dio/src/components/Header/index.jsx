import React from 'react'
import Button from '../Button'
import logo from '../../assets/logo-dio.png';
import { 
    BuscadorInputContainer,

    Container,
    Input,
    Menu,
    MenuRight,
    Row,

    Wrapper,
 } from './styles'


export default function Header() {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" />
                <BuscadorInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscadorInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Glogal</Menu>
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </Row>
        </Container>
    </Wrapper>
  )
}

