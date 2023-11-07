document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const suggestionList = document.getElementById('suggestionList');
  const lettersRemaining = document.getElementById('lettersRemaining');
  const searchIcon = document.getElementById('search-icon');

  const links = [
    { href: '/hamburguer', text: 'Hamburguer' },
    { href: '/bebidas', text: 'Bebidas' },
    { href: '/acompanhamentos', text: 'Acompanhamentos' },
    { href: '/doces', text: 'Doces' },
    { href: '/smash', text: 'Crispy Classic' },
    { href: '/duplo', text: 'Duo Supreme' },
    { href: '/chicken', text: 'Deluxe Chicken' },
    { href: '/agridoce', text: 'Sweet Chili' },
    { href: '/kids', text: 'Lil Bite' },
    { href: '/vegano', text: 'Veggie Fusion' },
    { href: '/vegetariano', text: 'Green Joy' },
    { href: '/selvagem', text: 'Wet Wild' },
    { href: '/crunch', text: 'Chicken Crunch' },
    { href: '/junior', text: 'Junior Joy' },
    { href: '/creamy', text: 'Chichen Creamy' },
    { href: '/tiplo', text: 'Triplo Meaty' },
    { href: '/cocacola', text: 'Coca Cola' },
    { href: '/fanta', text: 'Fanta Laranja' },
    { href: '/pepsi', text: 'Pepsi' },
    { href: '/sunrise', text: 'Tequila Sunrise' },
    { href: '/bluemoon', text: 'Blue Moon' },
    { href: '/frozen', text: 'Frozen Strawberry' },
    { href: '/miss', text: 'Miss Kiwi' },
    { href: '/batatas', text: 'Batata Completa' },
    { href: '/batatasim', text: 'Batata Simples' },
    { href: '/batatasimley', text: 'Smiley Potato' },
    { href: '/minidino', text: 'Dino Nuggets' },
    { href: '/batatarus', text: 'Batata Rustica' },
    { href: '/bolocenoura', text: 'Bolo de Cenoura' },
    { href: '/bolooreo', text: 'Bolo de Oreo' },
    { href: '/bolopaçoca', text: 'Bolo de paçoca' },
    { href: '/brigadeiro', text: 'Brigadeiro' },
  ];


  // Função para exibir resultados de pesquisa
  function displayResults(links, searchTerm) {
    suggestionList.innerHTML = '';

    if (searchTerm.length === 0) {
      suggestionList.style.display = 'none';
    } else {
      suggestionList.style.display = 'block';

      if (links.length > 0) {
        links.forEach(link => {
          const listItem = document.createElement('li');
          const anchor = document.createElement('a');
          anchor.href = link.href;
          anchor.textContent = link.text;
          listItem.appendChild(anchor);
          suggestionList.appendChild(listItem);
        });
      } else {
        suggestionList.style.display = 'none';
      }
    }

    // Calcular letras restantes
    const remainingLetters = searchTerm.length > 0 ? 10 - searchTerm.length : '';
    lettersRemaining.textContent = `Faltam ${remainingLetters} letras para completar a palavra.`;
  }

  // Função para realizar a pesquisa
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const matchingLink = links.find(link => link.text.toLowerCase().includes(searchTerm));
    if (matchingLink) {
      window.location.href = matchingLink.href;
    }
  }

  // Adicione um ouvinte de evento ao ícone de pesquisa
  searchIcon.addEventListener('click', function () {
    performSearch();
  });

  // Adicione um ouvinte de evento para entrada de texto
  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const matchingLinks = links.filter(link => link.text.toLowerCase().includes(searchTerm));
    displayResults(matchingLinks, searchTerm);
  });
});


//js opçoes

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.options-burger a');
  links.forEach(link => {
    link.addEventListener('click', scrollToElement);
  });

  function scrollToElement(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});