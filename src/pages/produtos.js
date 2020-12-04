import Produto from '../components/produto';
import {Container, Row} from 'react-bootstrap'
import Lista from '../components/produto/lista'
import '../components/produto/lista/lista.css'
import './style.css'

export default function Produtos() {
    return (
        <div>
            <Container fluid>
                
                <div className="listacss">
                <Lista/>
                </div>
                <div className="prodGrid">
                <Row>
                
                    <Produto/>   
                    <Produto/>   
                    <Produto/>   
                    <Produto/>   
                    <Produto/>   
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    
                    
                </Row>
                </div>
            </Container>
        </div>
        
    )
}