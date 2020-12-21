import Pedido from '../components/pedidos'
import { useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

// PÁGINA COM CONSULTA JOIN

export default function Pedidopg() {
    const [pedidos, setPedidos ] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://18.225.33.94/reactbackrepo/pedidos.php")
        const dados = await resposta.json()
        setPedidos(dados);
        
    }, [])

    return (
        <div className="my-5">
            <div className="jumbotron bg-white text-center font-weight-bold rounded-0">
                <h1 className="display-3">Últimos pedidos</h1>
                <p className="lead">Nessa página você pode ver os últimos itens vendidos</p>
                <hr className="my-4"/>
                <p>Da uma olhada nesses produtos!</p>
                <a className="btn btn-warning col-6 btn-lg" href="/produtos" role="button">Nossos Produtos!</a>
            </div>

            <Row>
                <Col>
                    <Container>
                            {pedidos && pedidos.map(item => <Pedido quantidade={item.quantidade} nome_cliente={item.nome_cliente} descricao={item.Descricao}
                            preco={item.preco} />)}
                    </Container>
                </Col>
            </Row>
        </div>
        
    )
}