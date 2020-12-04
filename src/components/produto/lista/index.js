import { ListGroup, ListGroupItem } from 'react-bootstrap'
import './lista.css'

export default function Lista(){
    return(
        
            
                    <ListGroup>
                        <ListGroup.Item>Todos (8)</ListGroup.Item>
                        <ListGroup.Item>Geladeira (3)</ListGroup.Item>
                        <ListGroup.Item>Fogão (2)</ListGroup.Item>
                        <ListGroupItem>Microondas (2)</ListGroupItem>
                        <ListGroup.Item>Lava Roupas (2)</ListGroup.Item>
                        <ListGroup.Item>Lava Louças (1)</ListGroup.Item>
                    </ListGroup>
                
       
    )
}