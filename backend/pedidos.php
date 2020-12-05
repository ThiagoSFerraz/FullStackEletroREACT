<?php

require "./Models/Pedidojoin.php";

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a api
header("Content-type: application/json");   //Indicação de arquivo JSON 

$Pedidos = PedidoJoin::getAll();

echo json_encode($Pedidos);