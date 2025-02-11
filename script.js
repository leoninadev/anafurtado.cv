Adocument.addEventListener('DOMContentLoaded', function() {
    // ------------------------------ Animações ScrollReveal ------------------------------
    // Inicializa ScrollReveal
    ScrollReveal({
        reset: false,    // Se deve resetar a animação quando o elemento sai da tela (false para manter a animação)
        distance: '60px',   // Distância que o elemento percorre durante a animação
        duration: 800,    // Duração da animação em milissegundos
        delay: 200,       // Delay antes da animação começar
        easing: 'ease-in-out', // Tipo de easing (suavização)
        origin: 'bottom'  // De onde o elemento vem (top, bottom, left, right)
    });

    // Revela os elementos que você quer animar
    ScrollReveal().reveal('.banner-3, .banner-4, footer'); // Anima banner-3, banner-4 e footer
    ScrollReveal().reveal('.container-banners > *', { interval: 200 }); // Anima os filhos do container um após o outro

    // Anima o header quando a página é carregada (opcional)
    ScrollReveal().reveal('header', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        reset: false
    });

    // Anima os links de navegação
    ScrollReveal().reveal('nav ul li a', {
        delay: 500,
        interval: 100,
        reset: false
    });

    // ------------------------------ Dropdowns ------------------------------
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            e.stopPropagation(); // Impede que o clique se propague para o documento
            dropdownContent.classList.toggle('show'); // Alterna a classe 'show'
        });

        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target) && dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show'); // Remove a classe 'show'
            }
        });
    });

     // ------------------------------ Animação mini-bio  ------------------------------
    ScrollReveal().reveal('.mini-bio', {
        duration: 1200, // Aumentei a duração para uma animação mais suave
        origin: 'left', // Altera a origem para a esquerda
        distance: '100px',
        easing: 'ease-out',
        reset: false // Impede a repetição da animação ao rolar para cima
    });

    // ------------------------------ Animação do título do banner 4 ------------------------------
    ScrollReveal().reveal('.banner-4-title', {
        duration: 1000,
        origin: 'top',
        distance: '30px',
        easing: 'ease-out',
        reset: false
    });

     // ------------------------------ Menu Toggle ------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');

    menuToggle.addEventListener('click', () => {
        header.classList.toggle('active');
    });
});
