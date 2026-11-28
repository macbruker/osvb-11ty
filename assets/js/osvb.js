const menuButton = document.querySelector('#menu-button')

function menuIsOpen() {
  const currentState = menuButton.getAttribute('aria-pressed')
  menuButton.setAttribute('aria-pressed', currentState === 'false')
}

menuButton.addEventListener('click', menuIsOpen)
