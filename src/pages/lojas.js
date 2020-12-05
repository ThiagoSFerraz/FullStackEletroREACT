import {ListGroup, ListGroupItem} from 'react-bootstrap'


export default function Lojas() {
    return (
        <div className="row my-4">
            <div className="col-4">
                <ListGroup>
                    <ListGroup.Item className="bg-dark text-white text-center">Rio de Janeiro</ListGroup.Item>
                    <ListGroup.Item>Avenida Presidente Vargas, 5000</ListGroup.Item>
                    <ListGroup.Item>10 &ordm; andar</ListGroup.Item>
                    <ListGroupItem>Centro</ListGroupItem>
                    <ListGroup.Item>3333-3333</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="col-4">
                <ListGroup>
                    <ListGroup.Item className="bg-dark text-white text-center">São Paulo</ListGroup.Item>
                    <ListGroup.Item>Avenida Paulista, 985</ListGroup.Item>
                    <ListGroup.Item>Térreo</ListGroup.Item>
                    <ListGroupItem>Centro</ListGroupItem>
                    <ListGroup.Item>7777-7777</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="col-4">
                <ListGroup>
                    <ListGroup.Item className="bg-dark text-white text-center">São Paulo</ListGroup.Item>
                    <ListGroup.Item>Avenida Lero Lero, 6999</ListGroup.Item>
                    <ListGroup.Item>42 &ordm; andar</ListGroup.Item>
                    <ListGroupItem>Aliança</ListGroupItem>
                    <ListGroup.Item>7272-7272</ListGroup.Item>
                </ListGroup>
            </div>
        </div>

    )
}
{/* <table border="0" width="100%" cellpadding="20">
            <tr>
                <td width="33%">
                    <h3>Rio de Janeiro</h3>
                    <p>Avenida Presidente Vargas, 5000</p>
                    <p>10 &ordm;; andar</p>
                    <p>Centro</p>
                    <p>(21) 3333-3333</p>
                </td>
                <td width="33%">
                    <h3>São Paulo</h3>
                    <p>Avenida Paulista, 985</p>
                    <p>3 &ordm;; andar</p>
                    <p>Jardins</p>
                    <p>(11) 5555-5555</p>
                </td>
                <td width="33%">
                    <h3>São Paulo</h3>
                    <p>Avenida Graciele Flores de Piteri, 255></p>
                    <p>4 &ordm;; andar</p>
                    <p>Osasco, Aliança</p>
                    <p>(11) 7777-7777</p>
                </td>
            </tr>

        </table> */}