const buttons = document.querySelectorAll('button');
const userInput = document.querySelector('#user-input');
const result = document.querySelector('#result');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonType = button.dataset.type;

    if (buttonType === 'nombre') {
      userInput.textContent += button.textContent;
    } else if (buttonType === 'operateur') {
      if (button.textContent === '=') {
        try {
          result.textContent = eval(userInput.textContent);
        } catch (e) {
          result.textContent = 'Erreur';
        }
      } else {
        userInput.textContent += button.textContent;
      }
    } else if (buttonType === 'reset') {
      if (button.textContent === 'AC') {
        userInput.textContent = '';
        result.textContent = '';
      } else if (button.textContent === 'DEL') {
        userInput.textContent = userInput.textContent.slice(0, -1);
      }
    }
  });
});
