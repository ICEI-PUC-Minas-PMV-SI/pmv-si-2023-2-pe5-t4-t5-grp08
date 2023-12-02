// Sample AJAX login request
function loginUser(form) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('path/to/your/login/api', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Redirect user to a dashboard or other protected page
            window.location.href = 'dashboard.html';
        } else {
            // Show an error message to the user
            document.getElementById('login-error').innerHTML = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Show a generic error message to the user
        document.getElementById('login-error').innerHTML = 'Error occurred while trying to log in. Please try again later.';
    });
}

// Add a new user
function addUser() {
    const login = document.getElementById('txt_login').value;
    const nome = document.getElementById('txt_nome').value;
    const email = document.getElementById('txt_email').value;
    const senha = document.getElementById('txt_senha').value;
    const senha2 = document.getElementById('txt_senha2').value;

    if (senha !== senha2) {
        alert('As senhas não correspondem.');
        return;
    }

    // You can add other validations here if needed

    // Prepare data for sending
    const formData = new FormData();
    formData.append('txt_login', login);
    formData.append('txt_nome', nome);
    formData.append('txt_email', email);
    formData.append('txt_senha', senha);

    // Send AJAX request to your server to add the new user
    fetch('node.js', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Show a success message and close the modal
            alert('Usuário adicionado com sucesso!');
            $('#loginModal').modal('hide');
        } else {
            // Show an error message to the user
            alert('Erro ao adicionar usuário: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Show a generic error message to the user
        alert('Erro ao adicionar usuário. Por favor, tente novamente mais tarde.');
    });
}

document.getElementById('btn_salvar').addEventListener('click', addUser);