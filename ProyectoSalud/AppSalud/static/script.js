function showLoading() {
    document.getElementById('loading').style.display = 'block'; // Muestra la imagen de carga
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none'; // Oculta la imagen de carga
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            showLoading(); // Muestra la imagen de carga al enviar el formulario
        });
    }
});

