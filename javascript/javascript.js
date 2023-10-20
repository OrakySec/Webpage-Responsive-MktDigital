function mostrarModal(modalId, mensagem) {
    var modal = document.getElementById(modalId);
    var mensagemElement = document.getElementById(modalId === 'modal-success' ? 'success-message' : 'error-message');

    // Define a mensagem no modal
    mensagemElement.textContent = mensagem;

    // Exibe o modal
    modal.style.display = 'block';
}

function fecharModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// JS da contagem regressiva
document.addEventListener("DOMContentLoaded", function() {
    // Define a duração da contagem regressiva em segundos (10 minutos = 600 segundos)
    var duration = 600;

    // Função para atualizar a contagem regressiva
    function updateCountdown() {
        var minutes = Math.floor(duration / 60);
        var seconds = duration % 60;

        // Formata os minutos e segundos com zero à esquerda, se necessário
        var formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
        var formattedSeconds = (seconds < 10) ? "0" + seconds : seconds;

        // Atualiza o elemento HTML com a contagem regressiva
        document.getElementById("countdown").textContent = "Tempo restante para a oferta: " + formattedMinutes + " minutos " + formattedSeconds + " segundos";

        // Reduz o tempo restante
        duration--;

        // Verifica se a contagem regressiva chegou a zero
        if (duration < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").textContent = "Contagem regressiva encerrada!";
        }
    }

    // Chama a função de atualização inicialmente
    updateCountdown();

    // Atualiza a contagem regressiva a cada segundo
    var countdownInterval = setInterval(updateCountdown, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('formulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        var telefone = document.getElementById('tel').value;

        // Remove espaços em branco e caracteres não numéricos
        telefone = telefone.replace(/\s/g, '').replace(/\D/g, '');

        // Verifica se o número de telefone tem exatamente 11 dígitos numéricos
        if (telefone.length === 11) {
            // Simulando um envio bem-sucedido
            var mensagem = "Seu cadastro foi concluído com sucesso, em breve você estará recebendo gratuitamente as instruções no seu WhatsApp!";
            mostrarModal('modal-success', mensagem);
        } else {
            // Exibindo mensagem de erro
            var erro = "Ocorreu um erro ao enviar o formulário. Por favor, insira um número de telefone válido com 11 dígitos numéricos. Exemplo: (81) 9 7411-3142";
            mostrarModal('modal-error', erro);
        }
    });
});
