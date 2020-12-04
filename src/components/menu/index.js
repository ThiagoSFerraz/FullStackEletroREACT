import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './menu.css';


function BaseMenu(props) {
    const { location } = props
    return(

        <Navbar className="navbar-white" bg="warning" expand="lg" fixed="top">
            <Navbar.Brand>
                FullStackEletro
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu" data-toggle="collapse">
                <Nav className="ml-auto mr-3 px-5">
                    <Nav.Item>
                        <Nav.Link className="px-4" as={Link} href="/" to="/">Página Inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="px-4"  as={Link} href="/produtos" to="/produtos" >Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="px-4" as={Link} href="/contato" to="/contato" >Contato</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="px-4" as={Link} href="/pedidos" to="/pedidos" >Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="px-4" as={Link} href="/lojas" to="/lojas" >Nossas lojas</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu)

export default Menu