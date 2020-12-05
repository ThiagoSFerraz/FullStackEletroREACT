<?php

require "Connection.php";

class PedidoJoin
{
  
    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT
        p.id_pedido as 'número do pedido',
        c.nome_cliente as 'nome do cliente:',
        pr.Descricao as 'nome do produto:',
        pr.preco as 'preço do produto:'
        FROM cliente c
        JOIN pedidos p on c.id_cliente = p.id_cliente
        JOIN produtos pr on pr.id_produto = p.id_produto;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


}
// SELECT
// p.id_pedido as 'número do pedido',
// c.nome_cliente as 'nome do cliente:',
// pr.Descricao as 'nome do produto:',
// pr.preco as 'preço do produto:'
// FROM cliente c
// JOIN pedidos p on c.id_cliente = p.id_cliente
// JOIN produtos pr on pr.id_produto = p.id_produto;


// SELECT
//         pedidos.id_pedido as 'número do pedido',
//         cliente.nome_cliente as 'nome do cliente:',
//         produtos.Descricao as 'nome do produto:',
//         produtos.preco as 'preço do produto:'
//         FROM cliente
//         JOIN pedidos on cliente.id_cliente = pedidos.id_cliente
//         JOIN produtos pr on produtos.id_produto = pedidos.id_produto;