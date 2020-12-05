<?php

require "./Models/Produto.php";

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a api
header("Content-type: application/json");   //Indicação de arquivo JSON 

$Produto = Produto::getAll();

echo json_encode($Produto);