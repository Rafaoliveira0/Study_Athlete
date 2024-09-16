document.addEventListener('DOMContentLoaded', () => {
    const loggedIn = localStorage.getItem('loggedIn');

    // Verifica se o usuário está autenticado ao acessar páginas protegidas
    if (document.location.pathname.includes('treinos.html') && !loggedIn) {
        document.location.href = 'login.html';
    }

    // Função para realizar login
    document.getElementById('login-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        localStorage.setItem('loggedIn', true);
        document.location.href = 'treinos.html';
    });

    // Função para realizar registro (simulado)
    document.getElementById('signup-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        // Em um cenário real, você enviaria os dados para o backend aqui
        document.location.href = 'login.html';
    });

    // Função para realizar logout
    document.query
