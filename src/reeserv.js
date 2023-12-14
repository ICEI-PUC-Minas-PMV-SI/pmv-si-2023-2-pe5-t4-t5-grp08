const apiUrl = 'https://jsonserverreservas.gabrielfreita64.repl.co/Reserva'; 

function displayMessage(mensagem) {
    msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

function readReserva(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler Reservas via API JSONServer:', error);
            displayMessage("Erro ao ler Reservas");
        });
}

function createReserva(Reserva, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Reserva),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Reserva inserido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir reserva via API JSONServer:', error);
            displayMessage("Erro ao inserir reserva");
        });
}

function updateReserva(id, Reserva, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Reserva),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Reserva alterado com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar Reserva via API JSONServer:', error);
            displayMessage("Erro ao atualizar Reserva");
        });
}

function deleteReserva(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Reserva removido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover Reserva via API JSONServer:', error);
            displayMessage("Erro ao remover Reserva");
        });
    
}
