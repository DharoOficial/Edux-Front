import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Menu from '../../menu/index';
import Rodape from '../../rodape/index';
import { Jumbotron, Button, Form } from 'react-bootstrap'
import jwt_decode from "jwt-decode";
import {url} from '../../../utils/constantis'

const Login = () => {

    let history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        console.log(email +'-' + senha);

        const login = {
            email: email,
            senha: senha
        }

        fetch(url + '/Login', {
            method: 'POST',
            body: JSON.stringify(login),

            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok === true){
                return response.json();
            }
            alert('Dados nao encontrado')
        })
        .then(data => {
            localStorage.setItem('token-nyous' ,data.token);

            let usuario = jwt_decode(data.token);
            console.log( usuario);
            if(usuario.role === 'professor')
            {
                history.push("/mainProfessor")
            }
            else
            {
                history.push("/mainUsuario")
            }
        })
        .catch(err => console.error(err))
        alert('Not found')
    }

    return (
        <div>
            <Menu />
            <div className="container" style={{ marginTop: '30px', marginBottom: '100px' }}>
                <Jumbotron>
                    <h1>Efetue seu login</h1>
                    <p>
                        caso você ainda não possui uma conta, efetue seu cadastro
                    </p>
                    <p>
                        <Button variant="primary" href="/cadastrar">Cadastrar-se</Button>
                    </p>
                </Jumbotron>

                <Form onSubmit={event => logar(event)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Digite seu email</Form.Label>
                        <Form.Control type="email" placeholder="Ex: nome.sobrenome@gmail.com" value={email} onChange={event => setEmail(event.target.value)} required />
                        <Form.Text className="text-muted">
                            Nunca compartilhe esse email com ninguem
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Digite sua Senha</Form.Label>
                        <Form.Control type="password" placeholder="Ex: 123456" value={senha} onChange={event => setSenha(event.target.value)} required />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginTop: '30px' }}>
                        Entrar
                    </Button>
                </Form>
            </div>
            <Rodape />
        </div>
    )
}
export default Login;