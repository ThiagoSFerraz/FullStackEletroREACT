import { Navbar, Nav } from 'react-bootstrap';

export default function Menu() {
    return(
        <Navbar className="navbar-dark" bg="warning" expand="lg" fixed="top">
            <Navbar.Brand>
                FullStackEletro
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu" />
                <Nav className="ml-auto mr-3">
                    <Nav.Item>
                        <Nav.Link href="/" to="/">Página Inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/produtos" to="/produtos" >Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contato" to="/contato" >Contato</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/pedidos" to="/pedidos" >Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/lojas" to="/lojas" >Nossas lojas</Nav.Link>
                    </Nav.Item>
                </Nav>
        </Navbar>
    )
}