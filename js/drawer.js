const hamburguerButton = document.querySelector('#hamburguer-button');

hamburguerButton.onclick = () => {
  const hamburguerMenu = document.querySelector('#hamburguer-menu');

  if (hamburguerMenu.classList.contains('hidden')) {
    hamburguerMenu.classList.remove('hidden');
  } else {
    hamburguerMenu.classList.add('hidden');
  }
};

