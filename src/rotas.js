import { Switch, Route } from 'react-router-dom';

import  Produtos  from './pages/produtos'
import  Pedidos  from './pages/pedidos'

function Rotas() {
    return (
        <Switch>
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
        </Switch>
    )
}

export default Rotas;