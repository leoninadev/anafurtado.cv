document.addEventListener('DOMContentLoaded', function() {
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
});
