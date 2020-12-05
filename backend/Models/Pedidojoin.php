<?php

require "Connection.php";

class PedidoJoin
{
  
    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT 
        p.quantidade,
        c.nome_cliente,
        pr.Descricao,
        pr.preco
        FROM cliente c
        JOIN pedidos p on c.id_cliente = p.id_cliente
        JOIN produtos pr on pr.id_produto = p.id_produto;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


}
