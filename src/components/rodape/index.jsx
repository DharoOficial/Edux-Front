import React from 'react';
import './index.css';
import logo from '../../assets/logo_branco_2-8.png';

const Rodape = () => {
    return (
        <footer>
            <div className="flex">
                <img src={logo} alt="Logo branco edux" className="img" />
                <p className="paragrafo">todos direitos reservados a equipe X</p>
            </div>
        </footer>
    )
}

export default Rodape