<?php

require "Connection.php";

class Produto
{
    public $id_produto;
    public $categoria;
    public $descricao;
    public $imagem;
    public $preco;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM produtos");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function registerComment()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("INSERT INTO produtos (name, telphone) values ('$this->name', '$this->telphone')");

        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }

}
