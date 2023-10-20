<?php

$mensagemPHP = "Seu formulário foi enviado com sucesso!"; // Mensagem de sucesso
$arquivo = "telefones.txt";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $telefone = $_POST["telefone"];
    
    // Remove espaços em branco e caracteres não numéricos
    $telefone = preg_replace('/\D/', '', $telefone);

    if (!empty($telefone) && strlen($telefone) === 11) {
        // Verifica se o telefone está no formato correto (11 dígitos numéricos)

        // Verifica se o arquivo existe, caso contrário, cria-o
        if (!file_exists($arquivo)) {
            touch($arquivo);
        }

        $arquivo = fopen($arquivo, "a");
        if ($arquivo) {
            fwrite($arquivo, $telefone . "\n");
            fclose($arquivo);
        } else {
            $mensagemPHP = "Erro ao abrir o arquivo para escrita."; // Mensagem de erro
        }
    } else {
        $mensagemPHP = "Ocorreu um erro ao enviar o formulário. Por favor, insira um número de telefone válido com 11 dígitos numéricos."; // Mensagem de erro
    }
}

// Retornar a mensagem em formato JSON
echo json_encode(array("mensagem" => $mensagemPHP));
?>
