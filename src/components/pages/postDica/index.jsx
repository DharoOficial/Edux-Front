import React, { useEffect, useStates } from 'react';
import Menu from '../../menu/index';
import Rodape from '../../rodape/index';
import { Jumbotron, Button, Table, Form } from 'react-bootstrap';
import {url} from '../../../utils/constantis';

const PostDica = () => {

    const [texto, setTexto] = useStates("");
    const [imagem, setImagem] = useStates("");
    const [dica, setDica] = useStates([]);

    useEffect(() => {
        listar();
    }, []);

    const listar = () => {

        fetch(url + '/Dica')
            .then(response => response.json())
            .then(data => {
                setTexto(data.data)
                console.log(data.data);
            })
            .catch(err => console.error(err));
    }


    const editar = (event) => {
        event.preventDefault();

        fetch(url + '/Dica' + '/' + event.target.value,{
            method : 'GET'
        })
        .then(response => response.json())
        .then(dados => {
            console.log(dados);

            this.setState({texto : dados.texto});
            this.setState({imagem : dados.imagem});
        })

    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + '/Dica' + '/' + event.target.value, {
            method : 'DELETE',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => {
                alert('Turma removida');
                listar();
            });

        console.log(event.target.value)
    }    


    const salvar = (event) => {
        event.preventDefault();

        const img = {
            Texto : texto,
            Imagem : imagem,
        }


        fetch(url , {
            method : 'POST',
            body: JSON.stringify(img),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Turma cadastrado');
            listar();
        })
        .catch(err => console.error(err))
    }
    


    return (
        <div >
            <Menu />
            <Jumbotron>
                <div className="container">
                    <h1>Dicas</h1>
                    <p>
                        Cadastre uma Dica aqui
                </p>

                </div>
            </Jumbotron>
            <div className="container">
                <Form>

                  

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Texto</Form.Label>
                        <Form.Control type="text" placeholder="Digite aqui a descriçao" value={texto} onChange={event => setTexto(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Texto</Form.Label>
                        <Form.Control type="text" placeholder="Digite aqui a descriçao" value={imagem} onChange={event => setImagem(event.target.value)} />
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={event => salvar(event)}>
                        Cadastrar
            </Button>
                </Form>

                <Table striped bordered hover size="sm" style={{ marginTop: '50px' }}>
                    <thead>
                        <tr>
                            <th>Texto</th>
                            <th>Imagem</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            dica.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.Texto}</td>
                                        <td>{item.Imagem}</td>
                                        <td>
                                            <button type='button' value={item.id} onClick={remover} className='btn btn-danger'>Remover</button>
                                            <button type='button' value={item.id} onClick={editar} className='btn btn-warning'>Editar</button>
                                        </td>
                                    </tr>
                                )
                            })

                        }

                    </tbody>
                </Table>
            </div>

            <Rodape />
        </div>
    )
}
export default PostDica;