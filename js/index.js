const sendButton = document.getElementById('send');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const somethingInput = document.getElementById('something');

sendButton.addEventListener('click', () => {
  if (
    !nameInput.value.trim() ||
    !emailInput.value.trim() ||
    !somethingInput.value.trim()
  ) {
    alert('Debes llenar todos los campos para poder contactarnos');
  } else {
    Email.send({
      SecureToken: 'bceedb94-3944-4948-a2d0-1c2d6f66237b',
      To: 'agredalex1997@gmail.com',
      From: emailInput.value,
      Subject: `Mensaje de ${nameInput.value} desde esaapp.com`,
      Body: somethingInput.value,
    }).then(function () {
      alert('Pronto nos contactaremos contigo');
    });
  }
});
