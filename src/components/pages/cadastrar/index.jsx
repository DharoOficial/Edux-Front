import React, {useState} from 'react';
import Menu from '../../menu/index';
import Rodape from '../../rodape/index';
import { Jumbotron, Button, Form } from 'react-bootstrap';  
import {url} from '../../../utils/constantis';

const Cadastro = () => {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [idUsuario, setIdUsuario] = useState(0);

    const salvar = (event) => {
        event.preventDefault();
    
        const login = {
            nome : nome,
            email : email,
            senha : senha,
            idUsuario : idUsuario,
        }
    
        let method = (idUsuario === 0 ? 'POST' : 'PUT')
        
    
        fetch(url + "/Usuario", {
            method : method,
            body: JSON.stringify(login),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Usuario Cadastrado');
            console.log(data.data)
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <Menu />
            <div className="container" style={{ marginTop: '30px', marginBottom: '100px'  }}>
                <Jumbotron>
                    <h1>Efetue cadastro</h1>
                    <p>
                        Caso você ja possue uma conta efetue o login
                    </p>
                    <Button variant="primary" type="submit"  href="/login">
                        Login
                    </Button>
                   
                </Jumbotron>

                <Form>

                <Form.Group controlId="formBasicEmail">
                        <Form.Label>Digite seu Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome aqui:"  value={nome} onChange={event => setNome(event.target.value)} />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Crie um email</Form.Label>
                        <Form.Control type="email" placeholder="Ex: nome.sobrenome@gmail.com"  value={email} onChange={event => setEmail(event.target.value)}/>
                        <Form.Text className="text-muted">
                            Nunca compartilhe esse email com ninguem
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Crie uma Senha</Form.Label>
                        <Form.Control type="password" placeholder="Ex: 123456" value={senha} onChange={event => setSenha(event.target.value)} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" style={{ marginTop: '30px'}} onClick={event => salvar(event)}>
                        Cadastrar
                    </Button>
                </Form>
            </div>
            <Rodape />
        </div>
    )
}
export default Cadastro;