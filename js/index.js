const sendButton = document.getElementById('send');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const somethingInput = document.getElementById('something');

function clearInputs() {
  nameInput.value = '';
  emailInput.value = '';
  somethingInput.value = '';
}

sendButton.addEventListener('click', () => {
  if (
    !nameInput.value.trim() ||
    !emailInput.value.trim() ||
    !somethingInput.value.trim()
  ) {
    alert('Debes llenar todos los campos para poder contactarnos');
  } else {
    sendButton.innerText = 'Enviando...';

    Email.send({
      SecureToken: 'e83b8515-0368-4326-9df9-85721ffb762d',
      To: 'calderonperaza@gmail.com',
      From: emailInput.value,
      Subject: `Mensaje de ${nameInput.value} desde esaapp.com`,
      Body: somethingInput.value,
    })
      .then(() => {
        clearInputs();
        alert('Pronto nos contactaremos contigo');
      })
      .catch((error) => {
        alert('Ocurrió un error. Intente de nuevo más tarde');
        console.error(error);
      })
      .finally(() => {
        sendButton.innerText = 'ENVIAR';
      });
  }
});
