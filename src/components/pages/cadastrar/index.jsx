import React, {useState} from 'react';
import Menu from '../../menu/index';
import Rodape from '../../rodape/index';
import { Jumbotron, Button, Form } from 'react-bootstrap'

const Cadastro = () => {

    const cadastro =() => {
        const[id, setId] = useState(0);
        const [value.nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
    }
    const login = {
        Nome  : nome,
        Email : email,
        Senha : senha
    }


    fetch('http://localhost:62602/api/account/login', {
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
                        <Form.Control type="password" placeholder="Ex: 123456" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" style={{ marginTop: '30px'}}>
                        Cadastrar
                    </Button>
                </Form>
            </div>
            <Rodape />
        </div>
    )
}
export default Cadastro;