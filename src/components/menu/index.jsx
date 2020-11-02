import React, { useState } from 'react';
import './index.css';
import {useHistory} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import jwt_decode from "jwt-decode";

const Menu = () => {
    let history = useHistory();
    

    const logar = (event) => {
        event.preventDefault();
        
        const token  = localStorage.getItem('token-nyous')

            if(token === null)
            {
                history.push("/login")
            }
            else
            {
                history.push("/dicas")
            }
     
        
    }

    const DropDown = () => {

        const token  = localStorage.getItem('token-nyous')

            if(token === null)
            {
                return(
                    <Nav.Link  href="/login" >Cadastrar</Nav.Link>
                )
            }
            if(token === 'Professor')
            {
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Cadastro Objetivo</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Cadastro Categoria</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Cadastro Aluno</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
                    </NavDropdown>
            }if(token === 'Aluno')
            {
                return(
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Objetivo</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Categoria</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Turma</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
                    </NavDropdown>
            )
            }
            
    }

    return (
        <Navbar bg="light" expand="lg"  className="conntainer" >
            <Navbar.Brand href="/"><img src={logo} alt="logo edux" className="imagem"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link  onClick={event => logar(event)} >Dicas</Nav.Link>
                    <Nav.Link onClick={event => logar(event)} >Usuario</Nav.Link>
                    < DropDown/>
                </Nav>
                
            </Navbar.Collapse>
            
        </Navbar>
        
    )
}

export default Menu