import React from 'react';
import Menu from '../../menu/index';
import Rodape from '../../rodape/index';
import { Carousel, Jumbotron, Button } from 'react-bootstrap'
import escola1 from '../../../assets/escola_edux(1).jpg'
import escola2 from '../../../assets/escola_edux(2).jpeg'
import escola3 from '../../../assets/escolas_edux(3).jpg'
import './index.css';


const Home = () => {
    return (
        <div>
            <Menu />
            <div className="container" style={{ marginTop: '30px' }}>

                <Carousel >
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 carrossel"
                            src={escola1}
                            alt="escola"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 carrossel"
                            src={escola2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 carrossel"
                            src={escola3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Jumbotron>
                    <h1>Sobre Nos:</h1>
                    <p>
                        somos um grupo de aprendizado da escola DEV senai
                    </p>
                    <p>
                        <Button variant="success" href="/login">Login</Button>
                        <Button variant="warning" href="/cadastrar" style={{ marginLeft: '20px' }}>Cadastre-se</Button>
                    </p>
                </Jumbotron>
            </div>
            <Rodape />
        </div>
    )
}
export default Home;