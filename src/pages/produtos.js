import Produto from '../components/produto'
import { useState, useEffect} from 'react'
import {Container, Row} from 'react-bootstrap'
import Lista from '../components/produto/lista'
import '../components/produto/lista/lista.css'
import './style.css'

export default function Produtos() {
    const [produtos, setProdutos ] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://18.225.33.94/reactbackrepo/produto.php")
        const dados = await resposta.json()
        setProdutos(dados);
        
    }, [])

    return (
        <div>
            <Container fluid>
                
                <div className="listacss">
                <Lista/>
                </div>
                <div className="prodGrid">
                <Row>
                
                    {produtos && produtos.map(item => <Produto imagem={item.imagem} descricao={item.Descricao} preco={item.preco}
                    categoria={item.categoria} />)}
                    
                    
                </Row>
                </div>
            </Container>
        </div>
        
    )
}